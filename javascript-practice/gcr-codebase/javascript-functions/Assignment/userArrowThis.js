// Q3
const user = {
    name: "Devang",
    showName: () => console.log(this.name)
};
user.showName();

const fixedUser = {
    name: "Devang",
    showName: function () {
        console.log(this.name);
    }
};
fixedUser.showName();

// Arrow functions do not bind this.
