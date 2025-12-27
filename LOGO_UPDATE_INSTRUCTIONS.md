# Logo Update Instructions

## Overview
This document provides instructions for updating company logos in the "Who's using Casbin?" section to their latest official versions.

## What Has Been Done ✅

All company logos have been converted to PNG format with transparent backgrounds:
- Converted 7 SVG files to PNG (Cisco, Elastic, Bytebase, JDLT, Musma, Pulsar, Siemens)
- Converted 3 JPG files to PNG with transparent backgrounds (ETH Zurich, HPE, Ontario)
- Converted 1 JFIF file to PNG (360, also fixed caption)
- Updated `static/data/users.json` to reference all PNG files
- Build verification passed

## What Needs To Be Done 📋

### High Priority: Intel Logo Update

The Intel logo (`static/img/users/intel.png`) is outdated and needs to be updated to Intel's latest branding (2020+ rebrand).

**How to update:**
1. Visit [Intel Brand Center](https://www.intel.com/content/www/us/en/newsroom/resources.html)
2. Download the latest Intel logo (preferably PNG with transparent background)
3. If only SVG/JPG available, convert to PNG with transparent background (see commands below)
4. Replace `static/img/users/intel.png` with the new file
5. Test locally: `yarn start`
6. Build: `yarn build`

### Other Logos to Verify/Update

These companies should have their logos checked against their latest official branding:

| Company | File | Brand Resources |
|---------|------|-----------------|
| VMware | `vmware.png` | https://www.vmware.com/ (press kit) |
| Docker | `docker.png` | https://www.docker.com/company/newsroom/media-resources |
| Microsoft | `microsoft.png` | https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks |
| IBM | `ibm.png` | https://www.ibm.com/design/language/ibm-logos/ |
| Red Hat | `redhat.png` | https://www.redhat.com/en/about/brand/standards/logo |
| Verizon | `verizon.png` | https://www.verizon.com/about/news/media-kit |
| T-Mobile | `t-mobile.png` | https://www.t-mobile.com/news/media-library |
| Alibaba | `alibaba.png` | Alibaba brand resources |
| Tencent | `tencent.png` | Tencent brand resources |
| F5 | `f5.png` | F5 Networks brand resources |
| Bose | `bose.png` | Bose brand resources |
| Honeywell | `honeywell.png` | Honeywell brand resources |
| Schneider Electric | `se.png` | Schneider Electric brand resources |
| Orange | `orange.png` | Orange brand resources |

## Logo Requirements

All logos must meet these criteria:

- **Format**: PNG with transparent background (no SVG, JPG, or other formats)
- **Size**: Recommended 200-400px (width or height), maintains aspect ratio
- **Quality**: High resolution, clean edges
- **Background**: Fully transparent
- **Source**: Official company brand resources only (no third-party sources)

## Image Processing Commands

### Convert SVG to PNG with Transparent Background
```bash
rsvg-convert -w 400 -h 400 -b none -f png input.svg > output.png
```

### Remove White Background from PNG/JPG
```bash
convert input.png -fuzz 10% -transparent white output.png
```

### Resize PNG (maintaining aspect ratio)
```bash
# Resize to 400px width
convert input.png -resize 400x output.png

# Resize to 400px height
convert input.png -resize x400 output.png
```

### Convert JPG to PNG with Transparent Background
```bash
convert input.jpg -fuzz 10% -transparent white output.png
```

## Testing Your Changes

### Local Development
```bash
yarn start
```
Then check:
1. Homepage - LogoCarousel component (scrolling logos in hero section)
2. "Who's using Casbin?" section - UserList component

### Build Verification
```bash
yarn build
```
Ensure no errors related to missing images or broken paths.

## File Locations

- **Logo files**: `/static/img/users/`
- **Logo metadata**: `/static/data/users.json`
- **LogoCarousel component**: `/src/components/LogoCarousel/index.js`
- **UserList component**: `/src/components/UserList/index.js`

## Adding the Logo Metadata

If adding a new company logo, update `/static/data/users.json`:

```json
{
    "caption": "Company Name",
    "image": "users/company.png",
    "infolink": "https://github.com/company/project",
    "pinned": true
}
```

## Notes

- All logos are displayed in both the homepage carousel and the "Who's using Casbin?" showcase section
- Logos with transparent backgrounds look better on different background colors
- Maintain consistent visual weight across all logos
- Test on both light and dark backgrounds if possible

## Questions?

If you have questions about this update, please refer to:
- Original issue: Update all logos in "our users"
- PR: [Link to this PR]
