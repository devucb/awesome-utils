name: ✨ Feature Request
description: Yeni bir özellik öner
title: "[FEATURE] "
labels: [enhancement]
assignees: []

body:

- type: markdown
  attributes:
  value: |
  Yeni fikirler her zaman hoş karşılanır 🎉

- type: input
  id: title
  attributes:
  label: Özellik Başlığı
  placeholder: Örnek: Karanlık mod desteği
  validations:
  required: true

- type: textarea
  id: description
  attributes:
  label: Açıklama
  description: Bu özellik ne işe yarayacak, ne gibi faydası olacak?
  validations:
  required: true

- type: textarea
  id: alternatives
  attributes:
  label: Alternatifler
  description: Düşündüğün başka çözümler varsa yaz
