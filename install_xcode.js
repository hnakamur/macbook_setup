const INSTALL_XCODE_BUTTON_DESC = 'Install, Xcode, Free'
const OPEN_XCODE_BUTTON_DESC = ' Xcode を開く'

function isInvalidIndexError(e) {
  return e.toString() === 'Error: Invalid index.'
}

function waitUntilSuccess(f) {
  var ret
  do {
    delay(1)
    try {
      ret = f()
    } catch (e) {
      if (!isInvalidIndexError(e)) {
        throw e
      }
    }
  } while (!ret)
  return ret
}

function say(message) {
  var app = Application.currentApplication()
  app.includeStandardAdditions = true
  app.say(message)
}

function installXcode() {
  var installed = false
  var storeApp = Application('App Store')
  storeApp.activate()

  var storeProc = Application('System Events').processes.byName('App Store')
  storeProc.frontmost = true
  var win = storeProc.windows.byName('App Store')
  // Search for Xcode
  var textField = waitUntilSuccess(function() {
    return win.toolbars[0].groups[6].textFields[0]
  })
  textField.value = 'Xcode'
  textField.buttons[0].click()

  // Click Xcode in search results
  waitUntilSuccess(function() {
    win.groups[0].groups[0].scrollAreas[0].uiElements[0].groups[1].uiElements.byName('Xcode').click()
    return true
  })

  waitUntilSuccess(function() {
    var desc = getInstallButton(win).description()
    return desc === INSTALL_XCODE_BUTTON_DESC || desc === OPEN_XCODE_BUTTON_DESC
  })

  var installBtn = getInstallButton(win)
  if (installBtn.description() === INSTALL_XCODE_BUTTON_DESC) {
    installBtn.click()
    waitUntilSuccess(function() {
      return installBtn.description() === OPEN_XCODE_BUTTON_DESC
    })
    installed = true
  }

  storeApp.quit()
  return installed
}

function getInstallButton(win) {
  return win.groups[0].groups[0].scrollAreas[0].uiElements[0].groups[0].groups[0].buttons[0]
}

function letUserAgreeToXcodeLicense() {
  var xcodeApp = Application('Xcode')
  xcodeApp.activate()
  say('エックスコードのライセンスに同意してください')
}

if (installXcode()) {
  letUserAgreeToXcodeLicense()
} else {
  say('エックスコードはすでにインストールされていました')
}
