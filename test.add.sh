#!/usr/bin/sh

cat > "./tests/.new_empty_file.test.ts" << EOF
import { describe, it, expect } from "vitest"

describe("", () => {
   it("", () => {
      expect().toMatchInlineSnapshot();
   })
})
EOF

code ./tests/.new_empty_file.test.ts
