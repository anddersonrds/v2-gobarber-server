interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'anddersonrds@gobarber.com.br',
      name: 'Anderson da GoBarber',
    },
  },
} as IMailConfig;
