module.exports = function(app) {
  const admin = app.models.admin;
  const defaultAdmin = {username: 'imp', email: 'imp@ynu.edu.cn',
    password: 'imp@ynu', scope: 'imp'};
  admin.find({where: {username: 'imp', email: 'imp@ynu.edu.cn', scope: 'imp'}}, function(err, foundRecords) {
    if (err) throw err;
    if (foundRecords.length === 0) {
      admin.create([defaultAdmin], function(err, createdRecords) {
        if (err) throw err;
        console.log('Created admins:', createdRecords);
      });
    }
  });
};
