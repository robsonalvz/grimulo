module.exports = [
  {
    'App.js': require('./react/App.js'),
    'index.js': require('./react/index.js'),
    'store.js': require('./react/store.js')
  },
  {
    'Entity.js': require('./spring-boot/Entity.js'),
    'EntityController.js': require('./spring-boot/EntityController.js'),
    'EntityRepository.js': require('./spring-boot/EntityRepository.js'),
    'EntityService.js': require('./spring-boot/EntityService.js')
  }
]