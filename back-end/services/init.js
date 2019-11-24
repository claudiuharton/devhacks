const init = {
  employees: async () => {
    const employees = await Employee.findAll({ raw: true });

    return employees;
  },
  cashPoints: async () => {}
};

module.exports = init;
