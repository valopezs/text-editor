const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store the event triggered
    window.deferredPrompt = event;

    // show the button
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // when button is clicked, access the stored event
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }

    // show prompt
    promptEvent.prompt();

    // reset the deferred prompt variable (it can only be used once)
    window.deferredPrompt = null;

    // hide the button
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // clear the prompt
    windown.deferredPrompt = null;
});
