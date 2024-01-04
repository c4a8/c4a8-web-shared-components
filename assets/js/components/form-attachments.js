import BaseComponent from './base-component.js';
import Tools from '../tools.js';
import State from '../state.js';

// TODO move all of this to the vue component

class FormAttachments extends BaseComponent {
  static rootSelector = '.form-attachments';
  static base64Selector = '.form-attachments__base64';

  constructor(root, options) {
    super(root, options);
    return;

    this.buttonSelector = '.form-attachments__button';
    this.textSelector = '.form-attachments__text';
    this.fileSelector = '.form-attachments__file';
    this.errorSelector = '.form-attachments__error';

    this.button = this.root.querySelector(this.buttonSelector);
    this.text = this.root.querySelector(this.textSelector);
    this.file = this.root.querySelector(this.fileSelector);
    this.error = this.root.querySelector(this.errorSelector);
    this.base64 = this.root.querySelector(FormAttachments.base64Selector);

    this.isRequired = this.file?.required;
    this.requiredMsg = this.error?.innerText;
    this.maxSize = this.root.dataset.maxSize;
    this.maxFiles = this.root.dataset.maxFiles;

    this.bindEvents();

    this.text.dataset.text = this.text.innerText.trim();

    window.i18n?.loader?.then(() => {
      this.wrongTypeText = window.i18n?.translate('formAttachmentsWrongType');
      this.maxFilesText = window.i18n?.translate('formAttachmentsMaxFiles', this.maxFiles);
      this.maxSizeText = window.i18n?.translate('formAttachmentsMaxSize');
    });
  }

  bindEvents() {
    this.root.addEventListener('drag', this.handleDragStart.bind(this));
    this.root.addEventListener('dragstart', this.handleDragStart.bind(this));

    this.root.addEventListener('dragover', this.handleDragOver.bind(this));
    this.root.addEventListener('dragenter', this.handleDragOver.bind(this));

    this.root.addEventListener('drop', this.handleDrop.bind(this));
    this.root.addEventListener('dragleave', this.handleDrop.bind(this));
    this.root.addEventListener('dragend', this.handleDrop.bind(this));

    this.root.addEventListener('click', this.handleAddAttachment.bind(this));
    this.file?.addEventListener('change', this.handleChange.bind(this));

    const parent = Tools.getParent(this.root, 'form');

    parent?.addEventListener('reset', this.resetText.bind(this));
  }

  handleDragStart(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();

    window.clearTimeout(this.dropTimeout);

    this.root.classList.add(State.DRAGGING);
  }

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e?.dataTransfer?.files;

    this.dropTimeout = window.setTimeout(() => {
      this.root.classList.remove(State.DRAGGING);

      if (e.type !== 'drop') return;

      this.handleDroppedFiles(droppedFiles);
    }, 50);
  }

  isAllowedFileExtension(file) {
    if (!file) return;

    const accept = this.file.getAttribute('accept')?.toLowerCase();
    const allowedExtensions = accept?.split(',') || [];
    const fileExtension = Tools.getExtension(file.name);

    return allowedExtensions.includes(`.${fileExtension}`);
  }

  isUnderMaxSize(file) {
    if (!file || !file.size) return;

    return file.size <= this.maxSize;
  }

  handleDroppedFiles(droppedFiles) {
    const errors = this.getErrors(droppedFiles);

    if (errors) return this.showError(errors);

    this.appendDroppedFiles(droppedFiles);
    this.switchText(droppedFiles);
  }

  handleAddAttachment() {
    this.file.click();
  }

  showError(text) {
    this.resetFile();
    this.setErrorText(text);

    this.root.classList.add(State.HAS_ERROR);
  }

  setErrorText(text) {
    if (!this.error) return;

    this.error.innerText = text;
  }

  resetText() {
    this.text.innerText = this.text.dataset.text;
  }

  resetError() {
    this.setErrorText(this.requiredMsg);

    this.root.classList.remove(State.HAS_ERROR);
  }

  appendDroppedFiles(droppedFiles) {
    if (!this.base64) return;

    if (this.isRequired) {
      this.file.required = false;
    }

    let dataTransfer = new DataTransfer();

    Array.from(droppedFiles).forEach((droppedFile) => {
      dataTransfer.items.add(droppedFile);
    });

    this.file.files = dataTransfer.files;
  }

  resetFile() {
    this.file.value = null;

    this.resetText();
    this.resetDroppedFile();
  }

  resetDroppedFile() {
    if (!this.base64) return;

    if (this.isRequired) {
      this.file.required = true;
    }

    this.base64.removeAttribute('data-file-name');
    this.base64.value = null;
  }

  switchText(files) {
    if (files[0].name) {
      let text = '';

      Array.from(files).forEach((file) => {
        text += `${file.name} <nobr>( ${Tools.toSize(file.size)} )</nobr><br/>`;
      });

      this.text.innerHTML = text;
      this.resetError();
    } else {
      this.resetText();
    }
  }

  areFilesAllowed(files) {
    return Array.from(files).every((file) => this.isAllowedFileExtension(file));
  }

  getErrors(files) {
    if (!this.areFilesAllowed(files)) return this.wrongTypeText;

    if (files.length > this.maxFiles) return this.maxFilesText;

    if (!Array.from(files).every((file) => this.isUnderMaxSize(file))) return this.maxSizeText;

    return;
  }

  handleChange(event) {
    const files = event?.target?.files;
    const errors = this.getErrors(files);

    if (errors) return this.showError(errors);

    this.resetDroppedFile();

    if (this.file.value === '') {
      this.resetText();
    } else {
      this.switchText(files);
    }
  }
}

export default FormAttachments;
