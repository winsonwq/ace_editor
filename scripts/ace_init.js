(function($) {

	$(function() {
		$('.form-textarea').each(function(idx, textarea) {
		 	new Editor(textarea);
		});
	});

	function Editor(textarea) {
		this.textarea = textarea;
		this.editorEl = $('<div class="editor"></div>').insertAfter(this.textarea);
		this.editor = ace.edit(this.editorEl.get(0));
		this.filter = $(this.textarea).parents('.text-format-wrapper').find('select.filter-list');

		this.editor.setTheme('tomorrow');
		this.editor.session.setMode("ace/mode/html");

		this.filterChange();

		this.filter.bind('change', this.proxy(this.filterChange));
		this.editor.on('change', this.proxy(this.syncValue));
	}

	Editor.prototype = {
		proxy : function(func) {
			var _ = this;
			return function(){
				return func.apply(_, arguments);
			}
		},
		filterChange : function() {
			if(this.filter.val() === 'ace_editor') {
				$(this.editor.container).show();
				$(this.textarea).hide();
				this.editor.setValue(this.textarea.value, -1);
			} else {
				$(this.editor.container).hide();
				$(this.textarea).show();
			}
		},
		syncValue : function() {
			$(this.textarea).val(this.editor.getValue());
			return false;
		}
	};

})(jQuery);