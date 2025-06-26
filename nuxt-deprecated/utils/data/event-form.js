const EventForm = {
  uncentered: true,
  ctaText: 'form.event.submit',
  cta: {
    skin: 'primary',
  },
  method: 'post',
  action: '/successful',
  fields: [
    {
      label: 'form.event.firstname',
      type: 'text',
      id: 'firstname',
      required: true,
      requiredMsg: 'form.event.firstnameRequired',
    },
    {
      label: 'form.event.lastname',
      type: 'text',
      id: 'lastname',
      required: true,
      requiredMsg: 'form.event.lastnameRequired',
    },
    {
      label: 'form.event.function',
      type: 'text',
      id: 'function',
      required: false,
      requiredMsg: 'form.event.functionRequired',
    },
    {
      label: 'form.event.company',
      type: 'text',
      id: 'company',
      required: true,
      requiredMsg: 'form.event.companyRequired',
    },
    {
      label: 'form.event.email',
      type: 'email',
      id: 'email',
      required: true,
      requiredMsg: 'form.event.emailRequired',
    },
    {
      label: 'form.event.participants',
      type: 'number',
      id: 'participants',
      required: true,
      requiredMsg: 'form.event.participantsRequired',
      col: 5,
      rowStart: true,
      rowEnd: true,
    },
    {
      label: 'form.event.date',
      type: 'text',
      id: 'date',
      required: false,
      requiredMsg: 'form.event.dateRequired',
    },
    {
      label: 'form.event.message',
      type: 'textarea',
      id: 'message',
      required: false,
      requiredMsg: 'form.event.messageRequired',
    },
    {
      label: 'form.event.dataprotection',
      type: 'checkbox',
      id: 'dataprotection',
      required: false,
      requiredMsg: 'form.event.dataprotectionRequired',
    },
    {
      type: 'hidden',
      id: '_to',
      value: 'leads@glueckkanja.com',
    },
    {
      type: 'hidden',
      id: '_gotcha',
    },
  ],
};

export default EventForm;
