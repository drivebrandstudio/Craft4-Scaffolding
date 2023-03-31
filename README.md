
# Craft CMS Dev Environment  

Scaffolding for a CraftCMS 4 project powered by Vite + barba.js + gsap and setup with DDEV

==PLEASE CHECK OUT THE [GITHUB WIKI](https://github.com/drivebrandstudio/Craft4-Scaffolding/wiki/Troubleshooting) FOR TROUBLESHOOTING==

(If you see == == wrapping words, it's simply a highlighting context that isn't rendering correctly)

**Currently there is a lot of cruft in this project. We can delete a significant amount to get down to just DDEV+Vite+Craft4**

## Requirements

- Ubuntu, install through the windows store
    *From an ==admin powershell 5== terminal, set Ubuntu to run wsl2 with:*  

    ```PowerShell
    wsl --set-version Ubuntu 2
    ```

- [Docker](https://www.docker.com)
- [DDEV](https://ddev.com)
- NodeJS ==version 14+==, I recommend using [NVM](https://github.com/nvm-sh/nvm) if using Windows

## Steps

**I recommend following [DDEV's instructions](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#windows
) on installing Docker and Ubuntu. Their docs are very detailed while not being too verbose**

1. **Note the `./` at the end of the clone script**

    - HTTPS:

    ```shell
    git clone https://github.com/drivebrandstudio/Craft4-Scaffolding.git ./
    ```  

    - ==SSH==:

    ```shell
    git clone git@github.com:drivebrandstudio/Craft4-Scaffolding.git ./
    ```

1. **Remove link to scaffolding git repo:**

```shell
rm -rf .git
```

1. **Initialize with a new repository:**  

```shell
git init
```

1. **Run npm install:**  

```shell
npm install
```

1. **Allow DDEV to configure the project**

```shell
ddev config
```

*This will probably require certain php extentions to be enabled. Find the php.ini file on your system with*:

```shell
php --ini
```

*Then make sure you have admin privileges with*  

```shell
sudo nano {path to php.ini}
```

*and remove the* `;` *before the needed ext*

1. **Check .ddev > config.yaml to see if**:

    - The php_version is ==8.1==
    - Database type is mariadb and v10.4
    - webserver_type is nginx-fpm
    - Add the following block:

    ```json
    {
        ...,
        webimage_extra_packages: [gconf-service, libasound2, libatk1.0-0, libcairo2, libgconf-2-4, libgdk-pixbuf2.0-0, libgtk-3-0, libnspr4, libpango-1.0-0, libpangocairo-1.0-0, libx11-xcb1, libxcomposite1, libxcursor1, libxdamage1, libxfixes3, libxi6, libxrandr2, libxrender1, libxss1, libxtst6, fonts-liberation, libnss3, xdg-utils]
    }
    ```

1. **Update package.json**

    - project name (Must follow [NPM package naming convention](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#name))
    - author
    - etc

1. **Run composer to fetch initial dependencies**

```shell
composer install
```

1. **Run make to handle remaining DDEV commands**

```shell
make install
```

1. **Start the DDEV servers**

```shell
ddev start
```

1. **Start the Vite servers**

```shell
make dev
```

1. **Navigate to <https://{the-project-name}.ddev.site> or <https://{the-project-name}.ddev.site/admin>**

==If you land on a page with server errors or an if(!hasCraftInstalled) then you are on the right track. Now check your .htaccess file and .env (make sure you have your database hooked into ddev correctly)==
