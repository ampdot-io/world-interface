class GlobalState {
    constructor() {
        this.state = {
            currentTime: "test",
            motd: "NEW! 'wiki' is now available. This lets you view your personal wiki. NEW! 'trippr' is now available. This lets you generate surreal images from text descriptions. NEW! 'crappr' is now available. This lets you make short 5 second videos which you can post on the internet. NEW! 'search query' and 'web open' commands are now generally available.",
            firstMessage: true,
        };
    }

    update(newState) {
        this.state = { ...this.state, ...newState };
    }

    get() {
        return this.state;
    }
}

module.exports = new GlobalState();
