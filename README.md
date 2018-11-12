# Headless detection prevention plugin for Google Chrome browser
A plugin for Chrome created to prevent Chrome headless detection, as explained in by Evan Sangaline on his blog [Intoli](https://intoli.com/blog/making-chrome-headless-undetectable/). In this blog post, a number of bypasses are created in order to prevent websites from detection a headless Chrome browser. This extension incorporates these bypasses and bundles them in a simple extension, ready to use. 

## Setup
In normal Google Chrome (for testing purposes):

1. Start Google Chrome
2. Go to [chrome://extensions/](chrome://extensions/)
3. Enable developer mode
4. Click on the button to load the extension

Use in Selenium Webdriver:

```
from selenium.webdriver.chrome.options import Options
options = Options()
options.add_extension('/path/to/extension.crx')
browser = webdriver.Chrome(chromedriver_path, options=options)
```

## Test
To test the workings of this extension, navigate your browser to this website: [https://intoli.com/blog/making-chrome-headless-undetectable/chrome-headless-test.html](https://intoli.com/blog/making-chrome-headless-undetectable/chrome-headless-test.html)
