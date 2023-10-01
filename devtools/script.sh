#!/bin/bash

excluded_dirs=("node_modules" ".next" ".git" ".swc" "_temp" ".idea")

find ../. -type d \( $(printf -- '-name %q -o ' "${excluded_dirs[@]}" | sed 's/-o $//') \) -prune -o -print | sed 's/\.\.\/\.\///' > output.txt