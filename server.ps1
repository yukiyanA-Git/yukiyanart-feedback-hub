# Simple Lightweight PowerShell HTTP Web Server for Port 8085
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8085/")
$listener.Start()
Write-Host "Lightweight Web Server active at http://localhost:8085/"

$basePath = "C:\Users\Iwamoto\.gemini\antigravity\scratch\feedback_hub"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    $urlPath = $request.Url.LocalPath
    if ($urlPath -eq "/") { $urlPath = "/index.html" }

    $filePath = Join-Path $basePath ($urlPath.TrimStart('/').Replace('/', '\'))

    if (Test-Path $filePath -PathType Leaf) {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $response.ContentLength64 = $bytes.Length
        
        if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html; charset=utf-8" }
        elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
        elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
        elseif ($filePath.EndsWith(".png")) { $response.ContentType = "image/png" }
        elseif ($filePath.EndsWith(".jpg")) { $response.ContentType = "image/jpeg" }

        $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $response.StatusCode = 404
    }
    $response.Close()
}
