import { Configuration, DynamicSvcApi } from "@superplatform/client";

export async function dynamicTest(apiKey: string) {
  const dynamicService: DynamicSvcApi = new DynamicSvcApi(
    new Configuration({
      apiKey: apiKey,
    })
  );

  await dynamicService.createObject({
    body: {
      object: {
        table: "uzerz",
        data: {
          fieldA: "valueA",
        },
        readers: ["_self"],
      },
    },
  });

  await dynamicService.createObject({
    body: {
      object: {
        table: "uzerz",
        data: {
          fieldA: "valueB",
        },
        readers: ["_self"],
      },
    },
  });

  let rsp = await dynamicService.query({
    body: {
      table: "uzerz",
      readers: ["_self"],
    },
  });

  if (rsp.objects?.length !== 2) {
    throw "expected result length to be 2";
  }
}
