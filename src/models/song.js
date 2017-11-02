
export default class Song {
    constructor(options) {
        if (options) {
            this.id = options.Id || options.id;
            this.stageName = options.StageName || options.stageName;
            this.url = options.Url || options.url;
            this.title = options.Title ||  options.title;
            this.order = options.Order || options.order;
            this.isComplete = options.IsComplete || options.isComplete;
            this.sessionId = options.SessionId || options.sessionId;
        } else {
            throw new Error('Songs constructor requires an options parameter');
        }
    }
}