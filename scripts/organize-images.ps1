<#
Organize blog images into per-post folders.
Run from repository root (PowerShell):

  cd repo-root
  .\scripts\organize-images.ps1

This script will:
- Move top-level JPGs into their slug folders as `hero.jpg`.
- Move top-level SVGs into their slug folders as `hero.svg` if present.
- Leave existing files in subfolders untouched.
#>

$base = Join-Path $PSScriptRoot ".."
$imgDir = Join-Path $base "public\imagenes-blog"

Write-Host "Organizing images in: $imgDir"

$pairs = @(
  @{slug='fin-de-la-filantropia'; file='fin-de-la-filantropia.jpg'},
  @{slug='que-es-patagonia-protocol'; file='que-es-patagonia-protocol.jpg'},
  @{slug='teoria-del-fractal'; file='teoria-del-fractal.jpg'}
)

foreach($p in $pairs){
  $slug = $p.slug
  $file = $p.file
  $src = Join-Path $imgDir $file
  $destDir = Join-Path $imgDir $slug
  if(-not (Test-Path $destDir)){
    New-Item -ItemType Directory -Path $destDir | Out-Null
    Write-Host "Created directory: $destDir"
  }
  if(Test-Path $src){
    $dest = Join-Path $destDir "hero.jpg"
    if(Test-Path $dest){
      Write-Host "Destination exists, skipping move: $dest"
    } else {
      Move-Item -LiteralPath $src -Destination $dest
      Write-Host "Moved $src -> $dest"
    }
  } else {
    Write-Host "Source JPG not found (ok if you already placed hero.jpg in folder): $src"
  }

  # also move any top-level svg duplicates into folder as fallback
  $svgSrc = Join-Path $imgDir ($slug + '.svg')
  if(Test-Path $svgSrc){
    $svgDest = Join-Path $destDir 'hero.svg'
    if(-not (Test-Path $svgDest)){
      Move-Item -LiteralPath $svgSrc -Destination $svgDest
      Write-Host "Moved $svgSrc -> $svgDest"
    } else {
      Write-Host "SVG destination exists, skipping: $svgDest"
    }
  }
}

# Move placeholder into folder (keep single placeholder in root as well)
$placeholder = Join-Path $imgDir 'placeholder.svg'
if(Test-Path $placeholder){
  foreach($p in $pairs){
    $destDir = Join-Path $imgDir $p.slug
    $dest = Join-Path $destDir 'placeholder.svg'
    if(-not (Test-Path $dest)){
      Copy-Item -LiteralPath $placeholder -Destination $dest
      Write-Host "Copied placeholder to $dest"
    }
  }
}

Write-Host "Done. Please review the folder structure under public/imagenes-blog/."