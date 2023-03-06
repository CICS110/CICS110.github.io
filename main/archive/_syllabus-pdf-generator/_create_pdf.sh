# This generates a PDF version of the syllabus.
# To run this you must have pandoc installed and the full tex distribution.
# Template: https://github.com/Wandmalfarbe/pandoc-latex-template
pandoc index.md -o index.pdf -V colorlinks=true \
  -V linkcolor=blue \
  -V urlcolor=blue \
  -V toccolor=gray \
  --from markdown \
  --template=_eisvogel.latex --listings
