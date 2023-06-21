import { APIEvent, json } from "solid-start";

export async function GET({ params }: APIEvent) {
  // console.log(`ITEM#: ${params.itemID}`);
  return json({
    "ID": params.itemID,
    "Bonus": true,
  })
}
