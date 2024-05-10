/* global $, hljs, window, document */

//var countTextsHere = document.querySelectorAll('#countText');
//var countTextsHereIndex = 0;

///// represents the paste application

var haste = function(appName, options) {
  this.appName = appName;
  this.$input = $('input');
  this.$box = $('#box');
  this.$code = $('#box code');
  this.$linenos = $('#linenos');
  this.$items = document.getElementById("item");    // The links
  
  this.$countsText = $('#countText');    // The texts
  this.options = options;
  this.configureShortcuts();
  this.configureButtons();
  this.fillCountTexts();
  // If twitter is disabled, hide the button
  if (!options.twitter) {
    $('#box2 .twitter').hide();
  }
};

///// represents a single document

var haste_document = function() {
  this.locked = false;
};

// Escapes HTML tag characters
haste_document.prototype.htmlEscape = function(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
};




      function skipToTwo() {

document.querySelector('#firstPromptSection').style.backgroundColor = "#a585e0";

document.querySelector('#firstPromptText').innerText = "It's date night! Pick shoes to wear:";

document.querySelector('#pic1').src = "Vp.jpg";
document.querySelector('#pic2').src = "By.webp";
document.querySelector('#pic3').src = "Qk.webp";
document.querySelector('#pic4').src = "Bd.jpg";
document.querySelector('#pic5').src = "Zu.jpg";
document.querySelector('#pic6').src = "Tz.jpg";

document.querySelector('#p1').id = "pa1";

document.querySelector('#p2').id = "pa2";

document.querySelector('#p3').id = "pa3";

document.querySelector('#p4').id = "pa4";

document.querySelector('#p5').id = "pa5";

document.querySelector('#p6').id = "pa6";

document.querySelector('#progressBar').style.width = "33.3%";

document.querySelector('#skip').style.display = "none";

document.querySelector('#skip2').style.display = "block";

document.querySelector('#popupImg1').src = "Uyu.webp";

document.querySelector('#popupImg2').src = "Wyw.webp";

document.querySelector('#popup1P1').id = "popup2P1";

document.querySelector('#popup1P2').id = "popup2P2";

};




      function skipToThree() {

document.querySelector('#firstPromptSection').style.backgroundColor = "#46cecb";

document.querySelector('#firstPromptText').innerText = "Pick jewelry to wear to the party tonight:";

document.querySelector('#pic1').src = "Xo.webp";
document.querySelector('#pic2').src = "Ww.webp";
document.querySelector('#pic3').src = "Ff.webp";
document.querySelector('#pic4').src = "Xs.webp";
document.querySelector('#pic5').src = "Mm.webp";
document.querySelector('#pic6').src = "Ss.webp";

document.querySelector('#pa1').id = "pb1";

document.querySelector('#pa2').id = "pb2";

document.querySelector('#pa3').id = "pb3";

document.querySelector('#pa4').id = "pb4";

document.querySelector('#pa5').id = "pb5";

document.querySelector('#pa6').id = "pb6";

document.querySelector('#progressBar').style.width = "50%";

document.querySelector('#skip2').style.display = "none";

document.querySelector('#skip3').style.display = "block";

};









      function skipToFour() {

document.querySelector('#firstPromptSection').style.backgroundColor = "#ddad46";

document.querySelector('#firstPromptText').innerText = "Pick what you'd want to receive as a gift:";

document.querySelector('#pic1').src = "Gav.webp";
document.querySelector('#pic2').src = "Tok.webp";
document.querySelector('#pic3').src = "Vag.webp";
document.querySelector('#pic4').src = "Vp.jpg";
document.querySelector('#pic5').src = "Kot.webp";
document.querySelector('#pic6').src = "Maz.webp";

document.querySelector('#pb1').id = "pc1";

document.querySelector('#pb2').id = "pc2";

document.querySelector('#pb3').id = "pc3";

document.querySelector('#pb4').id = "pc4";

document.querySelector('#pb5').id = "pc5";

document.querySelector('#pb6').id = "pc6";

document.querySelector('#progressBar').style.width = "66.6%";

document.querySelector('#skip3').style.display = "none";

document.querySelector('#skip4').style.display = "block";

};




      function skipToFive() {

document.querySelector('#firstPromptSection').style.backgroundColor = "#ddad46";

document.querySelector('#firstPromptText').innerText = "Pick what you'd want to receive as a gift:";

document.querySelector('#pic1').src = "Zp.webp";
document.querySelector('#pic2').src = "Tok.webp";
document.querySelector('#pic3').src = "Vag.webp";
document.querySelector('#pic4').src = "Wi.webp";
document.querySelector('#pic5').src = "By.webp";
document.querySelector('#pic6').src = "Fg.webp";

document.querySelector('#pc1').id = "pd1";

document.querySelector('#pc2').id = "pd2";

document.querySelector('#pc3').id = "pd3";

document.querySelector('#pc4').id = "pd4";

document.querySelector('#pc5').id = "pd5";

document.querySelector('#pc6').id = "pd6";

document.querySelector('#progressBar').style.width = "83.3%";

document.querySelector('#skip4').style.display = "none";

document.querySelector('#skip5').style.display = "block";

};




      function skipToSix() {

document.querySelector('#firstPromptSection').style.backgroundColor = "#ddad46";

document.querySelector('#firstPromptText').innerText = "Pick what you'd want to receive as a gift:";

document.querySelector('#pic1').src = "Zw.webp";
document.querySelector('#pic2').src = "Gv.webp";
document.querySelector('#pic3').src = "Ny.webp";
document.querySelector('#pic4').src = "Ku.webp";
document.querySelector('#pic5').src = "Rz.jpg";
document.querySelector('#pic6').src = "Vt.webp";

document.querySelector('#pd1').id = "pe1";

document.querySelector('#pd2').id = "pe2";

document.querySelector('#pd3').id = "pe3";

document.querySelector('#pd4').id = "pe4";

document.querySelector('#pd5').id = "pe5";

document.querySelector('#pd6').id = "pe6";

document.querySelector('#progressBar').style.width = "100%";

document.querySelector('#skip5').style.display = "none";

};







function letsDoIt(clickNumber, showNumber, countPerDay, putUrl) {
    var currentUrl;
    var clickCounter = 0;
    var d = new Date();
    d.setTime(d.getTime() + ((24 / countPerDay) * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var cookie1 = "p3006";
    var www = "www";
    var hash = window.location.hash.substring(1);
    console.log(hash);
    if (hash == www) {
        setCookie(cookie1, "1")
    }
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length)
        }
        return false
    }
    function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + "; path=/; " + expires
    }
    function loadpopunder() {
        win2 = window.open(currentUrl, "_blank");
        window.focus();
        window.location.href = putUrl
    }
    $(document).on("click", function(e) {
        if (!getCookie(cookie1)) {
            clickCounter = 1
        } else {
            clickCounter = getCookie(cookie1);
            clickCounter++
        }
        if (clickCounter <= (clickNumber * showNumber)) {
            setCookie(cookie1, clickCounter)
        }
        if (!(clickCounter % clickNumber) && !(clickCounter % showNumber) && (clickCounter <= (clickNumber * showNumber))) {
            e.preventDefault();
            currentUrl = window.location.href;
            var target = $(e.target), article;
            if (target.is('a')) {
                if (target.attr("href") && (target.attr("href").search("javascript") == -1)) {
                    currentUrl = target.attr("href");
                    if (currentUrl.indexOf(www) > -1) {
                        currentUrl = currentUrl + "#www"
                    }
                }
            } else if (target.closest('a')) {
                if (target.closest("a").attr("href") && (target.closest("a").attr("href").search("javascript") == -1)) {
                    currentUrl = target.closest("a").attr("href");
                    if (currentUrl.indexOf(www) > -1) {
                        currentUrl = currentUrl + "#www"
                    }
                }
            }
            setCookie(cookie1, clickCounter);
            loadpopunder()
        }
    })
}









// Save this document to the server and lock it here
haste_document.prototype.save = function(data, callback) {
  if (this.locked) {
    return false;
  }
  this.data = data;
  var _this = this;
  $.ajax('https://www.looksforwomen.com/documents', {
    type: 'post',
    data: data,
    dataType: 'json',
    contentType: 'text/plain; charset=utf-8',
    success: function(res) {
      _this.locked = true;
      _this.key = res.key;
      var high = hljs.highlightAuto(data);
      callback(null, {
        value: high.value,
        key: res.key,
        language: high.language,
        lineCount: data.split('\n').length
      });
    },
    error: function(res) {
      try {
        callback($.parseJSON(res.responseText));
      }
      catch (e) {
        callback({message: 'Something went wrong!'});
      }
    }
  });
};

// Save this document to the server and lock it here
haste_document.prototype.saveCount = function(callback) {
  if (this.locked) {
    return false;
  }

const urlParams = new URLSearchParams(window.location.search);

var myParam = urlParams.get('q');

console.log(myParam);

if (myParam !== null) {

const myParamSubzone = urlParams.get('s');

console.log(myParamSubzone);

if (myParamSubzone !== null) {

myParam = myParam + " " + myParamSubzone;

}

  $.ajax('/zones/' + myParam, {
    type: 'post',
    data: {
      data: myParam
    },
    dataType: 'json',
    contentType: 'text/plain; charset=utf-8',
    success: function(res) {
      _this.locked = true;
      _this.key = res.key;
      var high = hljs.highlightAuto(data);
      callback(null, {
        value: high.value,
        key: res.key,
        language: high.language,
        lineCount: data.split('\n').length
      });
    },
    error: function(res) {
      try {
        callback($.parseJSON(res.responseText));
      }
      catch (e) {
        callback({message: 'Something went wrong!'});
      }
    }
  });

}

  var data = encodeURIComponent(event.target.id);
  this.data = data;
  var _this = this;
  $.ajax('https://www.looksforwomen.com/counts/' + data, {
    type: 'post',
    data: {
      data: data
    },
    dataType: 'json',
    contentType: 'text/plain; charset=utf-8',
    success: function(res) {
      _this.locked = true;
      _this.key = res.key;
      var high = hljs.highlightAuto(data);
      callback(null, {
        value: high.value,
        key: res.key,
        language: high.language,
        lineCount: data.split('\n').length
      });
    },
    error: function(res) {
      try {
        callback($.parseJSON(res.responseText));
      }
      catch (e) {
        callback({message: 'Something went wrong!'});
      }
    }
  });
};

// Set the page title - include the appName
haste.prototype.setTitle = function(ext) {
  var title = ext ? this.appName + ' - ' + ext : this.appName;
  document.title = title;
};

// Show a message box
haste.prototype.showMessage = function(msg, cls) {
  var msgBox = $('<li class="'+(cls || 'info')+'">'+msg+'</li>');
  $('#messages').prepend(msgBox);
  setTimeout(function() {
    msgBox.slideUp('fast', function() { $(this).remove(); });
  }, 3000);
};

// Show the light key
haste.prototype.lightKey = function() {
  this.configureKey(['new', 'save']);
};

// Show the full key
haste.prototype.fullKey = function() {
  this.configureKey(['new', 'duplicate', 'twitter', 'raw']);
};

// Set the key up for certain things to be enabled
haste.prototype.configureKey = function(enable) {
  var $this, i = 0;
  $('#box2 .function').each(function() {
    $this = $(this);
    for (i = 0; i < enable.length; i++) {
      if ($this.hasClass(enable[i])) {
        $this.addClass('enabled');
        return true;
      }
    }
    $this.removeClass('enabled');
  });
};

// Remove the current document (if there is one)
// and set up for a new one
haste.prototype.newDocument = function(hideHistory) {
  this.$box.hide();
  this.doc = new haste_document();
  if (!hideHistory) {
    window.history.pushState(null, this.appName, '/');
  }
  this.setTitle();
  this.lightKey();
  this.$input.val('').show('fast', function() {
  });
  this.removeLineNumbers();
};

// Map of common extensions
// Note: this list does not need to include anything that IS its extension,
// due to the behavior of lookupTypeByExtension and lookupExtensionByType
// Note: optimized for lookupTypeByExtension
haste.extensionMap = {
  rb: 'ruby', py: 'python', pl: 'perl', php: 'php', scala: 'scala', go: 'go',
  xml: 'xml', html: 'xml', htm: 'xml', css: 'css', js: 'javascript', vbs: 'vbscript',
  lua: 'lua', pas: 'delphi', java: 'java', cpp: 'cpp', cc: 'cpp', m: 'objectivec',
  vala: 'vala', sql: 'sql', sm: 'smalltalk', lisp: 'lisp', ini: 'ini',
  diff: 'diff', bash: 'bash', sh: 'bash', tex: 'tex', erl: 'erlang', hs: 'haskell',
  md: 'markdown', txt: '', coffee: 'coffee', swift: 'swift'
};

// Look up the extension preferred for a type
// If not found, return the type itself - which we'll place as the extension
haste.prototype.lookupExtensionByType = function(type) {
  for (var key in haste.extensionMap) {
    if (haste.extensionMap[key] === type) return key;
  }
  return type;
};

// Look up the type for a given extension
// If not found, return the extension - which we'll attempt to use as the type
haste.prototype.lookupTypeByExtension = function(ext) {
  return haste.extensionMap[ext] || ext;
};

// Add line numbers to the document
// For the specified number of lines
haste.prototype.addLineNumbers = function(lineCount) {
  var h = '';
  for (var i = 0; i < lineCount; i++) {
    h += (i + 1).toString() + '<br/>';
  }
  $('#linenos').html(h);
};

// Remove the line numbers
haste.prototype.removeLineNumbers = function() {
  $('#linenos').html('&gt;');
};

// Load a document and show it
haste.prototype.loadDocument = function(key) {
  // Split the key up
  var parts = key.split('.', 2);
  // Ask for what we want
  var _this = this;
  _this.doc = new haste_document();
  _this.doc.load(parts[0], function(ret) {
    if (ret) {
      _this.$code.html(ret.value);
      _this.setTitle(ret.key);
      _this.fullKey();
      _this.$input.val('').hide();
      _this.$box.show().focus();
      _this.addLineNumbers(ret.lineCount);
    }
    else {
      _this.newDocument();
    }
  }, this.lookupTypeByExtension(parts[1]));
};

// Duplicate the current document - only if locked
haste.prototype.duplicateDocument = function() {
  if (this.doc.locked) {
    var currentData = this.doc.data;
    this.newDocument();
    this.$input.val(currentData);
  }
};

// Lock the current document
haste.prototype.lockDocument = function() {
  var _this = this;
console.log(this.$input.val());
if (this.$input.val() != "" && this.$input.val().includes("@")) {
  this.doc.save(this.$input.val(), function(err, ret) {
    if (err) {
      _this.showMessage(err.message, 'error');
    }
    else if (ret) {
      _this.$code.html(ret.value);
      _this.setTitle(ret.key);
      var file = '/' + ret.key;
      if (ret.language) {
        file += '.' + _this.lookupExtensionByType(ret.language);
      }
      window.history.pushState(null, _this.appName + '-' + ret.key, file);
      _this.fullKey();
      _this.$input.val('').hide();
      _this.$box.show().focus();
      _this.addLineNumbers(ret.lineCount);
    }
  });
}
};

// NEW FUNC FOR GET
// Lock the current document
haste.prototype.lockTheDoc = function(currentKey) {
console.log("Y2");
  var _this = this;
  _this.doc = new haste_document();

console.log(currentKey);
  this.doc.load(currentKey, function(err, ret) {
    //if (err) {
    //  console.log(err);
    //  console.log(err.message);
    //  console.log(ret);
    //  _this.showMessage(err.message, 'error');
    //}
    //else
      if (ret) {
      console.log("Y1");
      _this.setTitle(ret.key);
      var file = '/' + ret.key;
      if (ret.language) {
        file += '.' + _this.lookupExtensionByType(ret.language);
      }
      window.history.pushState(null, _this.appName + '-' + ret.key, file);
      _this.fullKey();
      _this.$input.val('').hide();
      _this.$box.show().focus();
      _this.addLineNumbers(ret.lineCount);
    }
  });
};

// NEW FUNC FOR POST
// Lock the current document
haste.prototype.lockTheDocForPost = function() {
console.log("Y2");
  var _this = this;
  _this.doc = new haste_document();

  this.doc.saveCount(function(err, ret) {
    //if (err) {
    //  console.log(err);
    //  console.log(err.message);
    //  console.log(ret);
    //  _this.showMessage(err.message, 'error');
    //}
    //else
    console.log(res);
    console.log(res.data);
      if (ret) {
      console.log("Y1");
      console.log(_this.$countsText.innerText);
      _this.$countsText.innerText = ret.value;
      _this.setTitle(ret.key);
      var file = '/' + ret.key;
      if (ret.language) {
        file += '.' + _this.lookupExtensionByType(ret.language);
      }
      window.history.pushState(null, _this.appName + '-' + ret.key, file);
      _this.fullKey();
      _this.$input.val('').hide();
      _this.$box.show().focus();
      _this.addLineNumbers(ret.lineCount);
    }
  });

switch(event.target.id) {
case "p1":
window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fchanel-pink-quilted-leather-jumbo-classic-double-flap-bag-p890899", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "p2":
window.open("https://www.kqzyfj.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2FWomen%2Fdior-black-cannage-patent-leather-medium-lady-dior-tote-p944430", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "p3":
window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Fchanel-black-quilted-leather-jumbo-classic-double-flap-bag-p961393", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "p4":
window.open("https://www.jdoqocy.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Ffilter%3Fsearch%3Dhermes%2520kelly", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "p5":
window.open("https://www.jdoqocy.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fhermes-cyclamen-chevre-leather-palladium-finish-birkin-30-bag-p927453", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "p6":
window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Flouis-vuitton-monogram-canvas-neverfull-mm-bag-p971919", '_blank');
document.title = "Now Pick Shoes";
skipToTwo();
break;
case "pa1":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fboots%2Fopyum-logo-plaque-pointed-toe-boots%2F14064571%2F14232262%2Fsaint-laurent%2F", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pa2":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Ffilter%3Fsearch%3Dcartier%2520necklace", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pa3":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fhigh-heeled-shoes%2Fdecollete-kate-85%2F13728573%2F13896264%2Fchristian-louboutin%2F", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pa4":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fjimmy-choo-ottilia-heeled-sandals%2F13854221%2F14021912%2Fjimmy-choo%2F", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pa5":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fopyum-sandals%2F13655926%2F13823617%2Fsaint-laurent%2F", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pa6":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fcagole-mule-m70%2F13634175%2F13801866%2Fbalenciaga%2F", '_blank');
document.title = "Pick Your Jewelry";
skipToThree();
break;
case "pb1":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fcartier-love-18k-yellow-gold-diamond-earrings-p858491", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pb2":
win2 = window.open("https://www.kqzyfj.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fvan-cleef-arpels-18k-white-gold-and-diamond-vintage-alhambra-guilloch-pendant-necklace-p946607", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pb3":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Fcartier-trinity-diamond-18k-three-tone-gold-pendant-necklace-p962987", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pb4":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Ffilter%3Fsearch%3Dcartier%2520watch", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pb5":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Fvan-cleef-arpels-18k-rose-gold-and-diamond-vintage-alhambra-pendant-necklace-p967120", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pb6":
win2 = window.open("https://www.kqzyfj.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fcartier-juste-un-clou-diamond-18k-rose-gold-bracelet-16-p950332", '_blank');
document.title = "Finally Pick Your Gift";
skipToFour();
break;
case "pc1":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fchanel-beige-quilted-caviar-leather-gst-shopper-tote-p972809", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pc2":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fmules-bing-100%2F14121015%2F14288706%2Fjimmy-choo%2F", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pc3":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fchanel-cc-resin-crystals-gold-tone-heart-drop-earrings-p970629", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pc4":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fboots%2Fopyum-logo-plaque-pointed-toe-boots%2F14064571%2F14232262%2Fsaint-laurent%2F", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pc5":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fgucci-red-matelass%25C3%25A9-velvet-small-gg-marmont-shoulder-bag-p971877", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pc6":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fembellished-satin-sandals%2F14051017%2F14218708%2Fprada%2F", '_blank');
document.title = "Finally Pick Your Gift";
skipToFive();
break;
case "pd1":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fherm%25C3%25A8s-pop-h-enamel-gold-plated-pendant-necklace-p975178", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pd2":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fmules-bing-100%2F14121015%2F14288706%2Fjimmy-choo%2F", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pd3":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fchanel-cc-resin-crystals-gold-tone-heart-drop-earrings-p970629", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pd4":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fdior-scarf-p949065", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pd5":
win2 = window.open("https://www.tkqlhce.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fcartier-18k-yellow-gold-and-diamond-diamants-l%25C3%25A9gers-pendant-necklace-p962763", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pd6":
win2 = window.open("https://www.tkqlhce.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fgivenchy-multicolor-floral-printed-silk-square-scarf-p864991", '_blank');
document.title = "Finally Pick Your Gift";
skipToSix();
break;
case "pe1":
win2 = window.open("https://www.tkqlhce.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fdior-navy-blue-oblique-embroidered-canvas-large-book-tote-p936151", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "pe2":
win2 = window.open("https://www.tkqlhce.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Flouis-vuitton-brown-monogram-canvas-keepall-55-duffel-bag-p974998", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "pe3":
win2 = window.open("https://www.tkqlhce.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Flouis-vuitton-black-malletage-leather-go-14-pm-bag-p951826", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "pe4":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Flouis-vuitton-brown-leather-large-onthego-totes-p948902", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "pe5":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Flouis-vuitton-brown-damier-ebene-canvas-neverfull-mm-tote-bag-p963586", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "pe6":
win2 = window.open("https://www.jdoqocy.com/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fwomen%2Fdior-pinkwhite-embroidered-canvas-large-toile-de-jouy-book-tote-p847447", '_blank');
window.focus();
        window.location.href = 'https://www.looksforwomen.com/results';
break;
case "popup1P1":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fsandals%2Fopyum-sandals%2F13655926%2F13823617%2Fsaint-laurent%2F", '_top');
break;
case "popup1P2":
win2 = window.open("https://click.linksynergy.com/deeplink?id=GKWXuxtdd2E&mid=41132&murl=https%3A%2F%2Fwww.italist.com%2Fus%2Fwomen%2Fshoes%2Fhigh-heeled-shoes%2Fdecollete-kate-85%2F13728573%2F13896264%2Fchristian-louboutin%2F", '_top');
break;
case "popup2P1":
win2 = window.open("https://www.anrdoezrs.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Flouis-vuitton-brown-monogram-canvas-roses-speedy-30-bag-p963167", '_top');
break;
case "popup2P2":
win2 = window.open("https://www.dpbolvw.net/click-101050243-13920803?url=https%3A%2F%2Ftheluxurycloset.com%2Fus-en%2Fwomen%2Fchanel-pink-lambskin-mini-flap-bag-p968236", '_top');
break;
} ;

};

haste.prototype.fillCountTexts = function() {
  var _this = this;

var elems = document.querySelectorAll('.p');

var index = 0, length = elems.length;

for ( ; index < length; index++) {
console.log(elems[index]);
_this.lockTheDoc(elems[index]);

}
};

haste.prototype.configureButtons = function() {
  var _this = this;
  this.buttons = [
    {
      $where: $('#box2 .save'),
      label: 'Save',
      shortcutDescription: 'control + s',
      shortcut: function(evt) {
        return evt.ctrlKey && (evt.keyCode === 83);
      },
      action: function() {
console.log("clicked1");
        if (_this.$input.val().replace(/^\s+|\s+$/g, '') !== '') {
console.log("clicked2");
          _this.lockDocument();
        }
      }
    },
    {
      $where: $('.item'),
      label: 'Count',
      shortcut: function(evt) {
        return evt.ctrlKey && evt.shiftKey && evt.keyCode === 78;
      },
      shortcutDescription: 'control + shift + n',
      action: function() {
        console.log("clicked");
        console.log(event.target.href);
          _this.lockTheDocForPost();
      }
    },
    {
      $where: $('#box2 .new'),
      label: 'New',
      shortcut: function(evt) {
        return evt.ctrlKey && evt.keyCode === 78;
      },
      shortcutDescription: 'control + n',
      action: function() {
        _this.newDocument(!_this.doc.key);
      }
    },
    {
      $where: $('#box2 .duplicate'),
      label: 'Duplicate & Edit',
      shortcut: function(evt) {
        return _this.doc.locked && evt.ctrlKey && evt.keyCode === 68;
      },
      shortcutDescription: 'control + d',
      action: function() {
        _this.duplicateDocument();
      }
    },
    {
      $where: $('#box2 .raw'),
      label: 'Just Text',
      shortcut: function(evt) {
        return evt.ctrlKey && evt.shiftKey && evt.keyCode === 82;
      },
      shortcutDescription: 'control + shift + r',
      action: function() {
        window.location.href = '/raw/' + _this.doc.key;
      }
    },
    {
      $where: $('#box2 .twitter'),
      label: 'Twitter',
      shortcut: function(evt) {
        return _this.options.twitter && _this.doc.locked && evt.shiftKey && evt.ctrlKey && evt.keyCode == 84;
      },
      shortcutDescription: 'control + shift + t',
      action: function() {
        window.open('https://twitter.com/share?url=' + encodeURI(window.location.href));
      }
    }
  ];
  for (var i = 0; i < this.buttons.length; i++) {
    this.configureButton(this.buttons[i]);
  }
};

haste.prototype.configureButton = function(options) {
  // Handle the click action
  options.$where.click(function(evt) {
    evt.preventDefault();
    if (!options.clickDisabled && $(this).hasClass('enabled')) {
      console.log(`configured`);
      options.action();
    }
  });
  // Show the label
  options.$where.mouseenter(function() {
    $('#box3 .label').text(options.label);
    $('#box3 .shortcut').text(options.shortcutDescription || '');
    $('#box3').show();
    $(this).append($('#pointer').remove().show());
  });
  // Hide the label
  options.$where.mouseleave(function() {
    $('#box3').hide();
    $('#pointer').hide();
  });
};

// Configure keyboard shortcuts for the textarea
haste.prototype.configureShortcuts = function() {
  var _this = this;
  $(document.body).keydown(function(evt) {
    var button;
    for (var i = 0 ; i < _this.buttons.length; i++) {
      button = _this.buttons[i];
      if (button.shortcut && button.shortcut(evt)) {
        evt.preventDefault();
        button.action();
        return;
      }
    }
  });
};

///// Tab behavior in the textarea - 2 spaces per tab
$(function() {

  $('input').keydown(function(evt) {
    if (evt.keyCode === 9) {
      evt.preventDefault();
      var myValue = '  ';
      // http://stackoverflow.com/questions/946534/insert-text-into-textarea-with-jquery
      // For browsers like Internet Explorer
      if (document.selection) {
        this.focus();
        var sel = document.selection.createRange();
        sel.text = myValue;
        this.focus();
      }
      // Mozilla and Webkit
      else if (this.selectionStart || this.selectionStart == '0') {
        var startPos = this.selectionStart;
        var endPos = this.selectionEnd;
        var scrollTop = this.scrollTop;
        this.value = this.value.substring(0, startPos) + myValue +
          this.value.substring(endPos,this.value.length);
        this.focus();
        this.selectionStart = startPos + myValue.length;
        this.selectionEnd = startPos + myValue.length;
        this.scrollTop = scrollTop;
      }
      else {
        this.value += myValue;
        this.focus();
      }
    }
  });

});














//(a separate Cloudflare worker should create the database changes whenever a new commit is made)

//post href as key with value 0









// 1st, retrieve current count of each instance when there is a clickCount element.

// this should be amongst configureButtons



//haste.prototype.setCounts = function() {

//var _this = this;

//var elems = document.querySelectorAll('#item');

//var index = 0, length = elems.length;

//for ( ; index < length; index++) {

// Cloudflare KV key has max length of 512 bytes.
// This code should be fixed to be less than 512 bytes yet all be valid characters (not sliced in the middle of the last character).

//var countKeyBefore = elems[index].href;

//var countKey = countKeyBefore.substring(0, 256);



// get and put here
// make a new lockDocument and copy .save just to have a simple get?
//var countValue

//elems[index].innerText = countValue;

//}



























//click link with #count

//parameter includes href
//event.target.href


//if href value lookup as key in viewsDatabase is not found {

//just put 0

//} else {

//get value for key href

//++

//post

//}

//(would "open in new tab" count?)




// Counter push
haste.prototype.lockDocumentNew = function() {
  var _this = this;
  this.doc.save(event.target.href, function(err, ret) {
    if (err) {
      _this.showMessage(err.message, 'error');
    }
    else if (ret) {
      _this.$code.html(ret.value);
      _this.setTitle(ret.key);
      var file = '/' + ret.key;
      if (ret.language) {
        file += '.' + _this.lookupExtensionByType(ret.language);
      }
      window.history.pushState(null, _this.appName + '-' + ret.key, file);
      _this.fullKey();
      _this.$input.val('').hide();
      _this.$box.show().focus();
      _this.addLineNumbers(ret.lineCount);
    }
  });
};




// Save this document to the server and lock it here
haste_document.prototype.saveNew = function(data, callback) {
  if (this.locked) {
    return false;
  }
  this.data = data;
  var _this = this;
  $.ajax('https://www.looksforwomen.com/documents', {
    type: 'post',
    data: data,
    dataType: 'json',
    contentType: 'text/plain; charset=utf-8',
    success: function(res) {
      _this.locked = true;
      _this.key = res.key;
      var high = hljs.highlightAuto(data);
      callback(null, {
        value: high.value,
        key: res.key,
        language: high.language,
        lineCount: data.split('\n').length
      });
    },
    error: function(res) {
      try {
        callback($.parseJSON(res.responseText));
      }
      catch (e) {
        callback({message: 'Something went wrong!'});
      }
    }
  });
};








