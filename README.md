# Gitlab Usage

```yaml
image: guymograbi/slack-message:1.0

notify_failure:
  stage: deploy
  when: failure
  script:
    - slack --token <my_token> --channel <channel_id> --text "${CI_PIPELINE_URL} failed!"

notify_failure:
  stage: deploy
  when: success
  script:
    - slack --token <my_token> --channel <channel_id> --text "${CI_PIPELINE_URL} passed!"
```

slack --token <xoxob...> --channel <channel-id> --text 'hello world!'
