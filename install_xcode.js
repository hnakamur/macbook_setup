const INSTALL_XCODE_BUTTON_DESC = 'Install, Xcode, Free'
const OPEN_XCODE_BUTTON_DESC = ' Xcode を開く'

function isInvalidIndexError(e) {
	return e.toString() === 'Error: Invalid index.'
}

function waitUntilSuccess(f) {
	var ret
	do {
		delay(1)
		ret = f()
	} while (!ret)
	return ret
}

function tryElement(f, valueForInvalidIndexError) {
	try {
		return f()
	} catch (e) {
		if (!isInvalidIndexError(e)) {
			throw e
		}
		return valueForInvalidIndexError
	}
}

function isLicenseDialogShown(xcodeProc) {
	return tryElement(function() {
		return xcodeProc.windows[0].staticTexts.byName("Xcode and iOS SDK License Agreement")
	})
}

var storeApp = Application("App Store")
storeApp.activate()

var storeProc = Application('System Events').processes.byName('App Store')
storeProc.frontmost = true
var win = storeProc.windows.byName('App Store')
// Search for Xcode
var textField = waitUntilSuccess(function() {
	return tryElement(function() {
		return win.toolbars[0].groups[6].textFields[0]
	})
})
textField.value = 'Xcode'
textField.buttons[0].click()

// Click Xcode in search results
waitUntilSuccess(function() {
	return tryElement(function() {
		win.groups[0].groups[0].scrollAreas[0].uiElements[0].groups[1].uiElements.byName('Xcode').click()
		return true
	})
})

function getInstallButton(win) {
	return win.groups[0].groups[0].scrollAreas[0].uiElements[0].groups[0].groups[0].buttons[0]
}

var app = Application.currentApplication()
app.includeStandardAdditions = true

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
	app.say("エックスコードのインストールが完了しました")
	
	var xcodeApp = Application("Xcode")
	xcodeApp.activate()

	// Xcodeのウィンドウが表示されるまで待つ
	var xcodeProc = Application('System Events').processes.byName('Xcode')
	waitUntilSuccess(function() {
		return tryElement(function() {
			return xcodeProc.windows[0]
		})
	})

	// ライセンス同意のダイアログが表示された場合はユーザが同意するのを待つ
	if (isLicenseDialogShown(xcodeProc)) {
		app.say("エックスコードのライセンスに同意してください")
		waitUntilSuccess(function() {
			return tryElement(function() {
				return xcodeProc.windows.byName("Welcome to Xcode")
			})
		})
	}

	xcodeApp.quit()
} else {
	app.say("エックスコードはすでにインストールされていました")
}
