describe('full', function () {
  beforeEach(module('app'));

  var $filter;

  beforeEach(inject(function (_$filter_){
    $filter = _$filter_;
  }));

  it('returns male when given m', function() {
    var gender = $filter('full');
    expect(gender('m')).toEqual('male');
  });

  it('returns female when given f', function() {
    var gender = $filter('full');
    expect(gender('f')).toEqual('female');
  });
  
});