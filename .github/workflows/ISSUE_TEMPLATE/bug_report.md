name: 🐞 Bug Report
description: Karşılaştığın bir hatayı bildir
title: "[BUG] "
labels: [bug]
assignees: []

body:

- type: markdown
  attributes:
  value: |
  Lütfen aşağıdaki bilgileri eksiksiz doldurun 🙏
- type: input
  id: summary
  attributes:
  label: Hata Özeti
  description: Kısaca hatanın ne olduğunu açıkla
  placeholder: Örnek: Sayfa yüklenmiyor
  validations:
  required: true

- type: textarea
  id: steps
  attributes:
  label: Adım Adım Nasıl Oluştu?
  description: Hatayı yeniden oluşturmak için izlediğin adımlar
  placeholder: | 1. Sayfayı aç 2. Butona tıkla 3. Hata mesajı görünüyor
  validations:
  required: true

- type: input
  id: browser
  attributes:
  label: Tarayıcı / Cihaz
  placeholder: Chrome, Safari, iOS 17, Android 14

- type: textarea
  id: logs
  attributes:
  label: İlgili Loglar / Ekran Görüntüsü
  description: Log veya ekran görüntüsü ekleyebilirsin
