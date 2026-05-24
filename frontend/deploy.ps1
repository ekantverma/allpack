$envFile = ".env"

if (-not (Test-Path $envFile)) {
    Write-Error ".env file not found! Copy .env.example to .env and add your Cloudflare API token."
    exit 1
}

Get-Content $envFile | ForEach-Object {
    if ($_ -match "^\s*([^=]+)=(.*)$") {
        $name = $matches[1].Trim()
        $value = $matches[2].Trim()
        [Environment]::SetEnvironmentVariable($name, $value)
    }
}

Write-Host "✅ Environment loaded from .env"
Write-Host "📤 Deploying to Cloudflare Workers..."

Set-Location dist/server
wrangler publish

Write-Host "`n✅ Deployment complete!"
