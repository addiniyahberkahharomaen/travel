@echo off
setlocal enabledelayedexpansion

REM =====================================================
REM KONFIGURASI
REM =====================================================
set "PREFIX=galeri"
set "EXT=jpg"
set "QUALITY=60"
set "RESIZE=1024x1024"
set "OUTDIR=output"
set /a count=1

if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo =====================================================
echo  Mengecilkan ukuran & resolusi gambar
echo  Output disimpan di folder "%OUTDIR%"
echo =====================================================

for %%f in (*.jpg *.jpeg *.png *.webp *.heic *.tiff *.gif) do (
    echo.
    echo Memproses: %%~nxf → %PREFIX%!count!.%EXT%

    magick "%%f" ^
        -auto-orient ^
        -strip ^
        -resize %RESIZE%^> ^
        -depth 8 ^
        -colorspace sRGB ^
        -sampling-factor 4:2:0 ^
        -interlace JPEG ^
        -quality %QUALITY% ^
        -define jpeg:dct-method=float ^
        "%OUTDIR%\%PREFIX%!count!.%EXT%"

    if exist "%OUTDIR%\%PREFIX%!count!.%EXT%" (
        for %%I in ("%OUTDIR%\%PREFIX%!count!.%EXT%") do (
            echo   Selesai: %%~zI bytes
        )
    ) else (
        echo   [GAGAL] Tidak dapat membuat file output.
    )

    set /a count+=1
)

echo.
echo =====================================================
echo  Selesai! Cek folder "%OUTDIR%"
echo =====================================================
pause
