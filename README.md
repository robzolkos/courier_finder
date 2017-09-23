## courier_finder

Find a courier company from a passed in connote.

Supported courier companies:

- Australia Post
- Couriers Please
- Fastway

#### Usage

```
const courier_finder = require('courier_finder')

const connote = "xxxxxxxxx"
const courier = courier_finder(connote)
```

A valid connote will return an object

```
{
  courier_name: "Name of courier",
  tracking_url: "http://tracking_url_for_connote"
}
```

An invalid connote will return an error object
```
{
  error: true,
  message: "Courier details not found from provided connote: xxxx"
}
```

A connote will be invalid if it doesn't match any of the validity rules of the suppported courier companies.

#### Installation

```
npm install courier_finder

or

yarn add courier_finder
```

#### Licence

MIT