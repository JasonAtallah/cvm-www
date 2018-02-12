

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
    settingsTabs: [
      {
        questionnairePageId: 'introduction',
        label: 'Introduction',
        type: 'markdown'
      },
      {
        questionnairePageId: 'completion',
        label: 'Completion',
        type: 'markdown'
      },
      {
        questionnairePageId: 'company',
        label: 'Company',
        fields: ['srea', 'haveTaxId', 'partOfCollective', 'haveSellerPermit'],
        type: 'profile'
      },
      {
        questionnairePageId: 'flowers',
        label: 'Flowers',
        fields: ['budSize', 'weightAvailable', 'thc', 'cbd', 'growStyle', 'shelfReady', 'photos', 'testResults'],
        type: 'products'
      },
      {
        questionnairePageId: 'edibles',
        label: 'Edibles',
        fields: ['unitsAvailable', 'thc', 'cbd', 'shelfReady', 'photo', 'testResults'],
        type: 'products'
      },
      {
        questionnairePageId: 'concentrates',
        label: 'Concentrates',
        fields: ['unitsAvailable', 'thc', 'cbd', 'shelfReady', 'type', 'photo', 'testResults'],
        type: 'products'
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
