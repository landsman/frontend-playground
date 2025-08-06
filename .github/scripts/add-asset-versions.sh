#!/bin/bash

# Script to add version parameters to CSS and JS files in HTML based on file modification timestamps

echo "Adding version parameters to CSS and JS files..."

# Function to get file modification timestamp
get_file_timestamp() {
    local file_path="$1"
    if [ -f "$file_path" ]; then
        # Get modification time as Unix timestamp
        if [[ "$OSTYPE" == "darwin"* ]]; then
            # macOS
            stat -f "%m" "$file_path"
        else
            # Linux
            stat -c "%Y" "$file_path"
        fi
    else
        echo "0"
    fi
}

# Function to process HTML files
process_html_file() {
    local html_file="$1"
    echo "Processing: $html_file"

    # Create a temporary file
    local temp_file="${html_file}.tmp"

    # Process the HTML file line by line
    while IFS= read -r line; do
        # Check for CSS links
        if [[ $line =~ href=\"([^\"]+\.css)\" ]]; then
            css_file="${BASH_REMATCH[1]}"
            # Convert relative path to absolute path from HTML file location
            html_dir=$(dirname "$html_file")
            if [[ $css_file == ./* ]]; then
                css_path="$html_dir/${css_file#./}"
            elif [[ $css_file == /* ]]; then
                css_path="$css_file"
            else
                css_path="$html_dir/$css_file"
            fi

            timestamp=$(get_file_timestamp "$css_path")
            if [[ $timestamp != "0" ]]; then
                # Replace the href with versioned one
                line=$(echo "$line" | sed "s|href=\"$css_file\"|href=\"$css_file?v=$timestamp\"|g")
                echo "  Added version to CSS: $css_file?v=$timestamp"
            fi
        fi

        # Check for JS scripts
        if [[ $line =~ src=\"([^\"]+\.js)\" ]]; then
            js_file="${BASH_REMATCH[1]}"
            # Convert relative path to absolute path from HTML file location
            html_dir=$(dirname "$html_file")
            if [[ $js_file == ./* ]]; then
                js_path="$html_dir/${js_file#./}"
            elif [[ $js_file == /* ]]; then
                js_path="$js_file"
            else
                js_path="$html_dir/$js_file"
            fi

            timestamp=$(get_file_timestamp "$js_path")
            if [[ $timestamp != "0" ]]; then
                # Replace the src with versioned one
                line=$(echo "$line" | sed "s|src=\"$js_file\"|src=\"$js_file?v=$timestamp\"|g")
                echo "  Added version to JS: $js_file?v=$timestamp"
            fi
        fi

        echo "$line" >> "$temp_file"
    done < "$html_file"

    # Replace original file with processed version
    mv "$temp_file" "$html_file"
}

# Find and process all HTML files
find . -name "*.html" -type f | while read -r html_file; do
    process_html_file "$html_file"
done

echo "Asset versioning completed!"
