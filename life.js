module.exports = () => ({
    data: {},
    init (name) {
        this.data.name = name;
        return this;
    },
    addSchool (schoolName) {
        this.data.schoolName = schoolName;
        return this;
    },
    addWork (workName) {
        this.data.workName = workName;
        return this;
    },
    addSomeone (someoneName) {
        this.data.someoneName = someoneName;
        return this;
    }
});