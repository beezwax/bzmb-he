# bzmb-he

A [bzBond-server](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#bzbond-server) microbond to encode and decode html using with the he npm package (https://www.npmjs.com/package/he).

## Installation

On a FileMaker server with bzBond-server installed run the following command:

`/var/www/bzbond-server/bin/install-microbond.sh bzmb-he https://github.com/beezwax/bzmb-he`

See the [bzBond-server documentation](https://github.com/beezwax/bzBond/tree/main/packages/bzBond-server#installing-microbonds) for more details on installation.

## Usage

The bzmb-he microbond provides two routes

### bzmb-he-decode

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",

  "route": "bzmb-he-decode",

  "customMethod": "POST",

  "customBody": {

    // Required. The html to decode
    "html": "string",

    // Opitonal. Decoding options, see https://www.npmjs.com/package/he#hedecodehtml-options
    "options": "object"
  }
}

```

The decoded text can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`

### bzmb-he-encode

In a server-side FileMaker script run `bzBondRelay` script with parameters in the following format:

```
{
  "mode": "PERFORM_JAVASCRIPT",

  "route": "bzmb-he-encode",

  "customMethod": "POST",

  "customBody": {

    // Required. The text to encode
    "text": "string",

    // Opitonal. Encoding options, see https://www.npmjs.com/package/he#heencodetext-options
    "options": "object"
  }
}

```

The encoded text can be accessed via `Get ( ScriptResult )`:
`JSONGetElement ( Get ( ScriptResult ); "response.result" )`