# Asana のタグを PR のタグに反映させる

## Description

AsanaのタグをPRのラベルに反映させる

## Usage

Create `.github/workflows/synchronize-pr-and-asana.yml`

### Simple Usage

```yaml
name: "synchronize-pr-and-asana"
on:
  pull_request:

jobs:
  synchronize-pr-and-asana:
    runs-on: ubuntu-latest
    steps:
    - uses: H37kouya/synchronize-pr-and-asana@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        asana-token: "${{ secrets.ASANA_PERSONAL_ACCESS_TOKEN }}"
        custom-fields: ""
```

### Inputs

Inputs
Various inputs are defined in action.yml to let you configure the synchronize-pr-and-asana:

| Name | Description | Default |
| ---|---|---|
| repo-token | Token to use to authorize label changes. Typically the GITHUB_TOKEN secret | N/A |
| asana-token | Token to use to authorize asana. | N/A |
| ignore-tags | ラベルに反映させないタグ <br> example: "優先度,ステータス" | '' |
| custom-fields | The name of the tag you want to reflect in the PR <br> example: "優先度,ステータス" | '' |

## Code in developer

Install the dependencies

```bash
npm install
```

Run the tests :heavy_check_mark:

```bash
npm test
```

You need to build before pull request after making any changes.

```bash
npm run build
```

## Change action.yml

The action.yml defines the inputs and output for your action.

Update the action.yml with your name, description, inputs and outputs for your action.

See the [documentation](https://help.github.com/en/articles/metadata-syntax-for-github-actions)

## Create a release branch

Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch

```bash
git checkout -b v1
git commit -a -m "v1 release"
```

```bash
git push origin v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)
