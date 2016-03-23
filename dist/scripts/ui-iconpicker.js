/**
 * ui-iconpicker
 *
 * @version   v0.1.7
 * @author    Justin Lau <justin@tclau.com>
 * @copyright Copyright (c) 2014 Justin Lau <justin@tclau.com>
 * @license   The MIT License (MIT)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("values/icon-groups-map", ["angular"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/values/icon-groups-map", []);
    return module.value("iconGroupsMap", {
      "bootstrap": {
        prefix: "glyphicon glyphicon-",
        classes: ["asterisk", "plus", "euro", "minus", "cloud", "envelope", "pencil", "glass", "music", "search", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "hdd", "bullhorn", "bell", "certificate", "thumbs-up", "thumbs-down", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-right", "circle-arrow-left", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "dashboard", "paperclip", "heart-empty", "link", "phone", "pushpin", "usd", "gbp", "sort", "sort-by-alphabet", "sort-by-alphabet-alt", "sort-by-order", "sort-by-order-alt", "sort-by-attributes", "sort-by-attributes-alt", "unchecked", "expand", "collapse-down", "collapse-up", "log-in", "flash", "log-out", "new-window", "record", "save", "open", "saved", "import", "export", "send", "floppy-disk", "floppy-saved", "floppy-remove", "floppy-save", "floppy-open", "credit-card", "transfer", "cutlery", "header", "compressed", "earphone", "phone-alt", "tower", "stats", "sd-video", "hd-video", "subtitles", "sound-stereo", "sound-dolby", "sound-5-1", "sound-6-1", "sound-7-1", "copyright-mark", "registration-mark", "cloud-download", "cloud-upload", "tree-conifer", "tree-deciduous"]
      },
      "font-awesome": {
        prefix: "fa fa-lg fa-",
        classes: ["glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-asc", "sort-up", "sort-desc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "reply-all", "mail-reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o"]
      },
      "ionicons": {
        prefix: "icon ion-",
        classes: ['ionic', 'arrow-up-a', 'arrow-right-a', 'arrow-down-a', 'arrow-down-a', 'arrow-left-a', 'arrow-up-b', 'arrow-right-b', 'arrow-down-b', 'arrow-left-b', 'arrow-up-c', 'arrow-right-c', 'arrow-down-c', 'arrow-left-c', 'arrow-return-right', 'arrow-return-left', 'arrow-swap', 'arrow-shrink', 'arrow-expand', 'arrow-move', 'arrow-resize', 'chevron-up', 'chevron-right', 'chevron-down', 'chevron-left', 'navicon-round', 'navicon', 'drag', 'log-in', 'log-out', 'checkmark-round', 'checkmark', 'checkmark-circled', 'close-round', 'close', 'close-circled', 'plus-round', 'plus', 'plus-circled', 'minus-round', 'minus', 'minus-circled', 'information', 'information-circled', 'help', 'help-circled', 'help-buoy', 'asterisk', 'alert', 'alert-circled', 'refresh', 'refreshing', 'loop', 'looping', 'shuffle', 'home', 'search', 'flag', 'star', 'heart', 'heart-broken', 'gear-a', 'gear-b', 'toggle-filled', 'toggle', 'settings', 'wrench', 'hammer', 'edit', 'trash-a', 'trash-b', 'document', 'document-text', 'clipboard', 'scissors', 'funnel', 'bookmark', 'email', 'folder', 'filing', 'archive', 'reply', 'reply-all', 'forward', 'share', 'paper-airplane', 'link', 'paperclip', 'compose', 'briefcase', 'medkit', 'at', 'pound', 'quote', 'cloud', 'upload', 'more', 'grid', 'calendar', 'clock', 'compass', 'pinpoint', 'pin', 'navigate', 'location', 'map', 'model-s', 'locked', 'unlocked', 'key', 'arrow-graph-up-right', 'arrow-graph-down-right', 'arrow-graph-up-left', 'arrow-graph-down-left', 'stats-bars', 'connection-bars', 'pie-graph', 'chatbubble', 'chatbubble-working', 'chatbubbles', 'chatbox', 'chatbox-working', 'chatboxes', 'person', 'person-add', 'person-stalker', 'woman', 'man', 'female', 'male', 'fork', 'knife', 'spoon', 'beer', 'wineglass', 'coffee', 'icecream', 'pizza', 'power', 'mouse', 'battery-full', 'battery-half', 'battery-low', 'battery-empty', 'battery-charging', 'wifi', 'bluetooth', 'calculator', 'camera', 'eye', 'eye-disabled', 'flash', 'flash-off', 'qr-scanner', 'image', 'images', 'contrast', 'wand', 'aperture', 'monitor', 'laptop', 'ipad', 'iphone', 'ipod', 'printer', 'usb', 'outlet', 'bug', 'code', 'code-working', 'code-download', 'fork-repo', 'network', 'pull-request', 'merge', 'game-controller-a', 'game-controller-b', 'xbox', 'playstation', 'steam', 'closed-captioning', 'videocamera', 'film-marker', 'disc', 'headphone', 'music-note', 'radio-waves', 'speakerphone', 'mic-a', 'mic-b', 'mic-c', 'volume-high', 'volume-medium', 'volume-low', 'volume-mute', 'levels', 'play', 'pause', 'stop', 'record', 'skip-forward', 'skip-backward', 'eject', 'bag', 'card', 'cash', 'pricetag', 'pricetags', 'thumbsup', 'thumbsdown', 'happy', 'sad', 'trophy', 'podium', 'ribbon-a', 'ribbon-b', 'university', 'magnet', 'beaker', 'flask', 'egg', 'earth', 'planet', 'lightbulb', 'cube', 'leaf', 'waterdrop', 'flame', 'fireball', 'bonfire', 'umbrella', 'nuclear', 'no-smoking', 'thermometer', 'speedometer', 'plane', 'jet', 'load-a', 'loading-a', 'load-b', 'loading-b', 'load-c', 'loading-c', 'load-d', 'loading-d', 'ios7-ionic-outline', 'ios7-arrow-back', 'ios7-arrow-forward', 'ios7-arrow-up', 'ios7-arrow-right', 'ios7-arrow-down', 'ios7-arrow-left', 'ios7-arrow-thin-up', 'ios7-arrow-thin-right', 'ios7-arrow-thin-down', 'ios7-arrow-thin-left', 'ios7-circle-filled', 'ios7-circle-outline', 'ios7-checkmark-empty', 'ios7-checkmark-outline', 'ios7-checkmark', 'ios7-plus-empty', 'ios7-plus-outline', 'ios7-plus', 'ios7-close-empty', 'ios7-close-outline', 'ios7-close', 'ios7-minus-empty', 'ios7-minus-outline', 'ios7-minus', 'ios7-information-empty', 'ios7-information-outline', 'ios7-information', 'ios7-help-empty', 'ios7-help-outline', 'ios7-help', 'ios7-search', 'ios7-search-strong', 'ios7-star', 'ios7-star-half', 'ios7-star-outline', 'ios7-heart', 'ios7-heart-outline', 'ios7-more', 'ios7-more-outline', 'ios7-home', 'ios7-home-outline', 'ios7-cloud', 'ios7-cloud-outline', 'ios7-cloud-upload', 'ios7-cloud-upload-outline', 'ios7-cloud-download', 'ios7-cloud-download-outline', 'ios7-upload', 'ios7-upload-outline', 'ios7-download', 'ios7-download-outline', 'ios7-refresh', 'ios7-refresh-outline', 'ios7-refresh-empty', 'ios7-reload', 'ios7-reloading', 'ios7-loop-strong', 'ios7-loop', 'ios7-bookmarks', 'ios7-bookmarks-outline', 'ios7-flag', 'ios7-flag-outline', 'ios7-glasses', 'ios7-glasses-outline', 'ios7-browsers', 'ios7-browsers-outline', 'ios7-at', 'ios7-at-outline', 'ios7-cart', 'ios7-cart-outline', 'ios7-pricetag', 'ios7-pricetag-outline', 'ios7-pricetags', 'ios7-pricetags-outline', 'ios7-chatboxes', 'ios7-chatboxes-outline', 'ios7-chatbubble', 'ios7-chatbubble-outline', 'ios7-cog', 'ios7-cog-outline', 'ios7-gear', 'ios7-gear-outline', 'ios7-settings', 'ios7-settings-strong', 'ios7-toggle', 'ios7-toggle-outline', 'ios7-analytics', 'ios7-analytics-outline', 'ios7-pie', 'ios7-pie-outline', 'ios7-pulse', 'ios7-pulse-strong', 'ios7-filing', 'ios7-filing-outline', 'ios7-box', 'ios7-box-outline', 'ios7-compose', 'ios7-compose-outline', 'ios7-trash', 'ios7-trash-outline', 'ios7-copy', 'ios7-copy-outline', 'ios7-email', 'ios7-email-outline', 'ios7-undo', 'ios7-undo-outline', 'ios7-redo', 'ios7-redo-outline', 'ios7-paperplane', 'ios7-paperplane-outline', 'ios7-folder', 'ios7-folder-outline', 'ios7-paper', 'ios7-paper-outline', 'ios7-world', 'ios7-world-outline', 'ios7-alarm', 'ios7-alarm-outline', 'ios7-speedometer', 'ios7-speedometer-outline', 'ios7-stopwatch', 'ios7-stopwatch-outline', 'ios7-timer', 'ios7-timer-outline', 'ios7-clock', 'ios7-clock-outline', 'ios7-time', 'ios7-time-outline', 'ios7-calendar', 'ios7-calendar-outline', 'ios7-photos', 'ios7-photos-outline', 'ios7-albums', 'ios7-albums-outline', 'ios7-camera', 'ios7-camera-outline', 'ios7-reverse-camera', 'ios7-reverse-camera-outline', 'ios7-eye', 'ios7-eye-outline', 'ios7-bolt', 'ios7-bolt-outline', 'ios7-barcode', 'ios7-barcode-outline', 'ios7-briefcase', 'ios7-briefcase-outline', 'ios7-medkit', 'ios7-medkit-outline', 'ios7-infinite', 'ios7-infinite-outline', 'ios7-calculator', 'ios7-calculator-outline', 'ios7-keypad', 'ios7-keypad-outline', 'ios7-telephone', 'ios7-telephone-outline', 'ios7-drag', 'ios7-location', 'ios7-location-outline', 'ios7-navigate', 'ios7-navigate-outline', 'ios7-locked', 'ios7-locked-outline', 'ios7-unlocked', 'ios7-unlocked-outline', 'ios7-monitor', 'ios7-monitor-outline', 'ios7-printer', 'ios7-printer-outline', 'ios7-person', 'ios7-person-outline', 'ios7-personadd', 'ios7-personadd-outline', 'ios7-people', 'ios7-people-outline', 'ios7-tennisball', 'ios7-tennisball-outline', 'ios7-baseball', 'ios7-baseball-outline', 'ios7-basketball', 'ios7-basketball-outline', 'ios7-football', 'ios7-football-outline', 'ios7-americanfootball', 'ios7-americanfootball-outline', 'ios7-paw', 'ios7-paw-outline', 'ios7-sunny', 'ios7-sunny-outline', 'ios7-partlysunny', 'ios7-partlysunny-outline', 'ios7-cloudy', 'ios7-cloudy-outline', 'ios7-rainy', 'ios7-rainy-outline', 'ios7-thunderstorm', 'ios7-thunderstorm-outline', 'ios7-snowy', 'ios7-moon', 'ios7-moon-outline', 'ios7-cloudy-night', 'ios7-cloudy-night-outline', 'ios7-musical-notes', 'ios7-musical-note', 'ios7-bell', 'ios7-bell-outline', 'ios7-mic', 'ios7-mic-outline', 'ios7-mic-off', 'ios7-volume-high', 'ios7-volume-low', 'ios7-play', 'ios7-play-outline', 'ios7-pause', 'ios7-pause-outline', 'ios7-recording', 'ios7-recording-outline', 'ios7-fastforward', 'ios7-fastforward-outline', 'ios7-rewind', 'ios7-rewind-outline', 'ios7-skipbackward', 'ios7-skipbackward-outline', 'ios7-skipforward', 'ios7-skipforward-outline', 'ios7-videocam', 'ios7-videocam-outline', 'ios7-film', 'ios7-film-outline', 'ios7-lightbulb', 'ios7-lightbulb-outline', 'ios7-wineglass', 'ios7-wineglass-outline', 'android-system-back', 'android-system-home', 'android-system-windows', 'android-wifi', 'android-battery', 'android-storage', 'android-keypad', 'android-call', 'android-arrow-back', 'android-arrow-forward', 'android-arrow-up-right', 'android-arrow-down-right', 'android-arrow-down-left', 'android-arrow-up-left', 'android-sort', 'android-drawer', 'android-stair-drawer', 'android-more', 'android-dropdown', 'android-settings', 'android-mixer', 'android-display', 'android-star', 'android-search', 'android-microphone', 'android-checkmark', 'android-information', 'android-add', 'android-remove', 'android-close', 'android-trash', 'android-volume', 'android-printer', 'android-download', 'android-hand', 'android-developer', 'android-calendar', 'android-clock', 'android-alarm', 'android-stopwatch', 'android-data', 'android-timer', 'android-camera', 'android-image', 'android-location', 'android-locate', 'android-earth', 'android-book', 'android-note', 'android-promotion', 'android-playstore', 'android-share', 'android-send', 'android-mail', 'android-inbox', 'android-archive', 'android-folder', 'android-forums', 'android-chat', 'android-user-menu', 'android-contact', 'android-contacts', 'android-friends', 'android-add-contact', 'android-social-user', 'android-social', 'android-reminder', 'android-lightbulb', 'social-twitter', 'social-twitter-outline', 'social-facebook', 'social-facebook-outline', 'social-googleplus', 'social-googleplus-outline', 'social-google', 'social-google-outline', 'social-dribbble', 'social-dribbble-outline', 'social-github', 'social-github-outline', 'social-instagram', 'social-instagram-outline', 'social-foursquare', 'social-foursquare-outline', 'social-pinterest', 'social-pinterest-outline', 'social-rss', 'social-rss-outline', 'social-tumblr', 'social-tumblr-outline', 'social-wordpress', 'social-wordpress-outline', 'social-reddit', 'social-reddit-outline', 'social-hackernews', 'social-hackernews-outline', 'social-designernews', 'social-designernews-outline', 'social-yahoo', 'social-yahoo-outline', 'social-buffer', 'social-buffer-outline', 'social-skype', 'social-skype-outline', 'social-linkedin', 'social-linkedin-outline', 'social-usd', 'social-usd-outline', 'social-bitcoin', 'social-bitcoin-outline', 'social-vimeo', 'social-vimeo-outline', 'social-youtube', 'social-youtube-outline', 'social-dropbox', 'social-dropbox-outline', 'social-apple', 'social-apple-outline', 'social-android', 'social-android-outline', 'social-windows', 'social-windows-outline', 'social-tux', 'social-freebsd-devil']
      }
    });
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("services/IconGroupCollection", ["angular", "values/icon-groups-map"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/services/IconGroupCollection", ["ui-iconpicker/values/icon-groups-map"]);
    return module.factory("IconGroupCollection", [
      "iconGroupsMap", function(iconGroupsMap) {
        var IconGroupCollection;
        return IconGroupCollection = (function() {
          function IconGroupCollection(groupIdLiteral) {
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            this.iconGroupsMap = {};
            this.includeGroups(groupIdLiteral);
          }

          IconGroupCollection.prototype.filterByGroups = function(groupIdLiteral) {
            var group, groupId, groupIds, _ref;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            if (groupIdLiteral !== "all") {
              groupIds = groupIdLiteral.split(" ");
              _ref = this.iconGroupsMap;
              for (groupId in _ref) {
                group = _ref[groupId];
                if (groupIds.indexOf(groupId) !== -1) {
                  delete this.iconGroupsMap[groupId];
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.includeGroups = function(groupIdLiteral) {
            var group, groupId, groupIds;
            if (groupIdLiteral == null) {
              groupIdLiteral = "bootstrap";
            }
            groupIds = groupIdLiteral.split(" ");
            for (groupId in iconGroupsMap) {
              group = iconGroupsMap[groupId];
              if (this.iconGroupsMap[groupId] == null) {
                if (groupIdLiteral === "all" || groupIds.indexOf(groupId) !== -1) {
                  this.iconGroupsMap[groupId] = group;
                }
              }
            }
            return this;
          };

          IconGroupCollection.prototype.getClassArray = function() {
            var classes, group, iconClass, id, _i, _len, _ref, _ref1;
            classes = [];
            _ref = this.iconGroupsMap;
            for (id in _ref) {
              group = _ref[id];
              _ref1 = group.classes;
              for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                iconClass = _ref1[_i];
                classes.push(group.prefix + iconClass);
              }
            }
            return classes;
          };

          return IconGroupCollection;

        })();
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("templates/iconpicker", ["angular", "angular-bootstrap"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/templates/iconpicker", ["ui.bootstrap"]);
    return module.run([
      "$templateCache", function($templateCache) {
        return $templateCache.put("templates/iconpicker.html", "<span class=\"btn-group ui-iconpicker\" ng-class=\"{ disabled: disabled }\">\n	<button type=\"button\" class=\"btn btn-default dropdown-toggle\"><i class=\"{{ iconClass }}\"></i><span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu\" role=\"menu\">\n		<li ng-repeat=\"class in availableIconClasses\">\n			<button class=\"btn btn-default\" type=\"button\" ng-click=\"$parent.iconClass = class\"><span class=\"{{ class }}\"></span></button>\n		</li>\n	</ul>\n	<input name=\"{{ name }}\" type=\"hidden\" value=\"{{ iconClass }}\" ng-if=\"name\" />\n</span>");
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("directives/ui-iconpicker", ["angular", "services/IconGroupCollection", "templates/iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    var module;
    module = angular.module("ui-iconpicker/directives/ui-iconpicker", ["ui-iconpicker/services/IconGroupCollection", "ui-iconpicker/templates/iconpicker"]);
    return module.directive("uiIconpicker", [
      "IconGroupCollection", function(IconGroupCollection) {
        return {
          replace: true,
          restrict: "E",
          scope: {
            name: "@",
            model: "=?ngModel"
          },
          templateUrl: "templates/iconpicker.html",
          link: function($scope, $element, attrs) {
            var _ref;
            $scope.availableIconClasses = (new IconGroupCollection(attrs.groups)).getClassArray();
            $scope.iconClass = (_ref = attrs.value) != null ? _ref : $scope.availableIconClasses[0];
            if (attrs.ngModel) {
              $scope.model = $scope[attrs.ngModel];
              $scope.$watch("iconClass", function() {
                return $scope.model = $scope.iconClass;
              });
              $scope.$watch("model", function() {
                return $scope.iconClass = $scope.model;
              });
            }
            $scope.$dropdownButton = $element.find("button").eq(0);
            return $scope.disabled = attrs.disabled != null;
          }
        };
      }
    ]);
  });

}).call(this);

(function() {
  var umd;

  umd = function(root, factory) {
    if (typeof define === "function" && (define.amd != null)) {
      return define("ui-iconpicker", ["angular", "directives/ui-iconpicker"], factory);
    } else {
      return factory(root.angular);
    }
  };

  umd(this, function(angular) {
    return angular.module("ui-iconpicker", ["ui-iconpicker/directives/ui-iconpicker"]);
  });

}).call(this);

