let user = {};

user.name = 'John';
user.surname = 'Smith';
console.log(user);

if ('name' in  user) {
    user.name = 'Pete';
}
console.log(user);

if ('name' in user) {
    delete user.name;
}
console.log(user);