

export default [
  {
    label: 'Profile',
    value: 'profile',
  },
  {
    label: 'Email Templates',
    value: 'emailTemplates'
  },
  {
    label: 'Questionnaire',
    value: 'questionnaire',
    options: [
      {
        value: 'introduction',
        label: 'Introduction',
        dispatch: 'updateQuestionnaire',
        markdown: true
      },
      {
        value: 'completion',
        label: 'Completion',
        dispatch: 'updateQuestionnaire',
        markdown: true
      },
      {
        value: 'company',
        label: 'Company',
        dispatch: 'updateQuestionnaire',
        options: ['srea', 'haveTaxId', 'partOfCollective', 'haveSellerPermit'],
        markdown: false
      },
      {
        value: 'flowers',
        label: 'Flowers',
        dispatch: 'updateQuestionnaire',
        options: ['budSize', 'weightAvailable', 'thc', 'cbd', 'growStyle', 'shelfReady', 'photos', 'testResults'],
        markdown: false
      },
      {
        value: 'edibles',
        label: 'Edibles',
        dispatch: 'updateQuestionnaire',
        options: ['unitsAvailable', 'thc', 'cbd', 'shelfReady', 'photo', 'testResults'],
        markdown: false
      },
      {
        value: 'concentrates',
        label: 'Concentrates',
        dispatch: 'updateQuestionnaire',
        options: ['unitsAvailable', 'thc', 'cbd', 'shelfReady', 'type', 'photo', 'testResults'],
        markdown: false
      }
    ]
  },
  {
    label: 'Button Generator',
    value: 'buttonGenerator'
  },
  {
    label: 'Calendar',
    value: 'calendar'
  }
];
