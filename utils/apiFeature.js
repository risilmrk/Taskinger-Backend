

module.exports = class apiFeature {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    this.query = this.query.find(queryObj);
    return this;
  }
;

  sort(){
    if(this.queryString.sort){
        const sortBy = this.queryString.sort.split(',').join(' ')
        this.query = this.query.sort(sortBy)
    }else{
        this.query = this.query.sort('-createdAt')
    }
    return this
  }

pendingTasks() {
    if (this.queryString.pending === 'true') {
        this.query = this.query.find({ started: true, finished: false });
    }
    return this;
}
}