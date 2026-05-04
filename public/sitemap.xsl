<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap</title>
        <style>
          body{font-family:system-ui,sans-serif;margin:1.25rem;line-height:1.45;background:#0a0e12;color:#e2e8f0}
          h1{font-size:1.1rem;margin:0 0 1rem}
          table{width:100%;border-collapse:collapse;font-size:0.9rem}
          th,td{border:1px solid rgba(148,163,184,0.25);padding:0.45rem 0.55rem;text-align:left;vertical-align:top}
          th{background:#121a22;color:#fff}
          a{color:#2dd4bf}
          .muted{color:#94a3b8;font-size:0.85rem;margin-top:1rem}
        </style>
      </head>
      <body>
        <h1>XML sitemap (human view)</h1>
        <p class="muted">This is only a browser-friendly view. Search engines read the raw XML.</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last modified</th>
              <th>Change frequency</th>
              <th>Priority</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="//*[local-name()='urlset']/*[local-name()='url']">
              <tr>
                <td>
                  <a>
                    <xsl:attribute name="href">
                      <xsl:value-of select="*[local-name()='loc']"/>
                    </xsl:attribute>
                    <xsl:value-of select="*[local-name()='loc']"/>
                  </a>
                </td>
                <td><xsl:value-of select="*[local-name()='lastmod']"/></td>
                <td><xsl:value-of select="*[local-name()='changefreq']"/></td>
                <td><xsl:value-of select="*[local-name()='priority']"/></td>
                <td>
                  <xsl:for-each select="*[local-name()='image']">
                    <div><xsl:value-of select="*[local-name()='loc']"/></div>
                  </xsl:for-each>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
