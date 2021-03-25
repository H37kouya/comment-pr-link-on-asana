# Asana のコメントに GitHub Pull Requestのリンクをコメントする

## Description

Asana のコメントに GitHub Pull Requestのリンクをコメントする

## Usage

Create `.github/workflows/comment-pr-link-on-asana.yml`

### Simple Usage

```yaml
name: "comment-pr-link-on-asana"
on:
  pull_request:

jobs:
  comment-pr-link-on-asana:
    runs-on: ubuntu-latest
    steps:
    - uses: H37kouya/comment-pr-link-on-asana@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        asana-token: "${{ secrets.ASANA_PERSONAL_ACCESS_TOKEN }}"
        custom-fields: ""
```

### Inputs

Inputs
Various inputs are defined in action.yml to let you configure the comment-pr-link-on-asana:

| Name | Description | Default |
| ---|---|---|
| repo-token | Token to use to authorize label changes. Typically the GITHUB_TOKEN secret | N/A |
| asana-token | Token to use to authorize asana. | N/A |

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
