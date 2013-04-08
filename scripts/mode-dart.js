define("ace/mode/dart",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/dart_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("../tokenizer").Tokenizer,o=e("./dart_highlight_rules").DartHighlightRules,u=function(){var e=new o;this.$tokenizer=new s(e.getRules())};r.inherits(u,i),function(){}.call(u.prototype),t.Mode=u}),define("ace/mode/dart_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="true|false|null",t="this|super",n="try|catch|finally|throw|break|case|continue|default|do|else|for|if|in|return|switch|while|new",r="abstract|class|extends|external|factory|implements|interface|get|native|operator|set|typedef",i="static|final|const",s="void|bool|num|int|double|Dynamic|var|String",o=this.createKeywordMapper({"constant.language.dart":e,"variable.language.dart":t,"keyword.control.dart":n,"keyword.declaration.dart":r,"storage.modifier.dart":i,"storage.type.primitive.dart":s},"identifier"),u={token:"string",merge:!0,regex:".+"};this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",merge:!0,regex:/\/\*/,next:"comment"},{token:["meta.preprocessor.script.dart"],regex:"^(#!.*)$"},{token:["keyword.other.import.dart","meta.declaration.dart"],regex:"#(?:\\b)(?:library|import|source|resource)(?:\\b)"},{token:["keyword.other.import.dart","text"],regex:"(?:\\b)(prefix)(\\s*:)"},{regex:"\\bas\\b",token:"keyword.cast.dart"},{regex:"\\?|:",token:"keyword.control.ternary.dart"},{regex:"(?:\\b)(is\\!?)(?:\\b)",token:["keyword.operator.dart"]},{regex:"(<<|>>>?|~|\\^|\\||&)",token:["keyword.operator.bitwise.dart"]},{regex:"((?:&|\\^|\\||<<|>>>?)=)",token:["keyword.operator.assignment.bitwise.dart"]},{regex:"(===?|!==?|<=?|>=?)",token:["keyword.operator.comparison.dart"]},{regex:"((?:[+*/%-]|\\~)=)",token:["keyword.operator.assignment.arithmetic.dart"]},{regex:"=",token:"keyword.operator.assignment.dart"},{token:"string",merge:!0,regex:"'''",next:"qdoc"},{token:"string",merge:!0,regex:'"""',next:"qqdoc"},{token:"string",merge:!0,regex:"'",next:"qstring"},{token:"string",merge:!0,regex:'"',next:"qqstring"},{regex:"(\\-\\-|\\+\\+)",token:["keyword.operator.increment-decrement.dart"]},{regex:"(\\-|\\+|\\*|\\/|\\~\\/|%)",token:["keyword.operator.arithmetic.dart"]},{regex:"(!|&&|\\|\\|)",token:["keyword.operator.logical.dart"]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}],comment:[{token:"comment",regex:".*?\\*\\/",merge:!0,next:"start"},{token:"comment",merge:!0,regex:".+"}],qdoc:[{token:"string",regex:".*?'''",next:"start"},u],qqdoc:[{token:"string",regex:'.*?"""',next:"start"},u],qstring:[{token:"string",regex:"[^\\\\']*(?:\\\\.[^\\\\']*)*'",merge:!0,next:"start"},u],qqstring:[{token:"string",regex:'[^\\\\"]*(?:\\\\.[^\\\\"]*)*"',merge:!0,next:"start"},u]}};r.inherits(s,i),t.DartHighlightRules=s})