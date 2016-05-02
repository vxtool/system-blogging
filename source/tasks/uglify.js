module.exports = function(grunt, options){

  var projectDev    = options.projectDev;
  var projectDir    = options.projectDir;
  var projectSource = options.projectSource;

  return {
    options: {
      mangle: {
        except: ['jQuery']
      }
    },
    site: {
      files: {
        '<%= projectDir %>/site/js/scripts.min.js':
        [
        '<%= projectSource %>/material-design-lite/material.min.js',
        '<%= projectDev %>/site/js/scripts.js'
        ]
      }
    },
    admin: {
      files: {
        '<%= projectDir %>/admin/js/scripts.min.js':
        [
        '<%= projectSource %>/material-design-lite/material.min.js',
        '<%= projectDev %>/admin/js/scripts.js'
        ]
      }
    }
  };
};
