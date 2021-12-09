import { createComponent, getTitle } from '../../.storybook/templates';
import { includesformattachmentshtml as component } from '../../.storybook/generatedIncludes';

const options = getTitle({
  title: 'Form Attachments',
});

export default {
  ...options,
};

const baseArgs = {
  description: 'Anhänge wie Lebenslauf und Anschreiben hinzufügen',
  text: 'Oder Datei auswählen',
  extensions: ['pdf', 'txt'],
  maxSize: 10000000,
};

const Template = (args) => createComponent(args, component);

export const FormAttachments = Template.bind({});

FormAttachments.args = {
  ...baseArgs,
};
