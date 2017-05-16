// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', './assets/environment.json');
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
        else {
          reject("Cannot load configuration...");
        }
      };
      xhr.send();
    });


