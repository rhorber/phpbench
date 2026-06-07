window.BENCHMARK_DATA = {
  "lastUpdate": 1780838170551,
  "repoUrl": "https://github.com/rhorber/phpbench",
  "entries": {
    "PHPBench Performance": [
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "eb7bd89a56463c4b1086f33fb3e79fc8b636e0a2",
          "message": "Fix typos",
          "timestamp": "2026-03-22T10:36:26Z",
          "tree_id": "647886b2a4ff278f206d2d63b26fa863faec6c7d",
          "url": "https://github.com/rhorber/phpbench/commit/eb7bd89a56463c4b1086f33fb3e79fc8b636e0a2"
        },
        "date": 1774185369808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 7077.843248532318,
            "range": "± 0.82%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 351.72602739725596,
            "range": "± 2.39%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 348.411937377689,
            "range": "± 2.32%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 348.85714285714243,
            "range": "± 1.93%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2231.8571428570904,
            "range": "± 0.54%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3349.224070450091,
            "range": "± 0.83%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5848.239726027324,
            "range": "± 0.53%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3687.863013698634,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5413.14285714288,
            "range": "± 0.54%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 9037.498043052823,
            "range": "± 0.78%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5086.635029354189,
            "range": "± 1.26%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7322.301369863073,
            "range": "± 0.75%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 12053.736790606707,
            "range": "± 0.87%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 2829.9215264187706,
            "range": "± 0.73%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 229.40645792563646,
            "range": "± 2.14%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 1081.0542074364128,
            "range": "± 0.60%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "RunCommandBench::benchDefault",
            "value": 122230.23483365984,
            "range": "± 1.52%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 122622.675146772,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 23506.191780821722,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 73.67651663405037,
            "range": "± 1.52%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 65.47260273972486,
            "range": "± 1.68%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 958.4602739726014,
            "range": "± 0.66%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1443.8011741683035,
            "range": "± 1.82%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "8888764ea1ef66db2dbb839d80a90a080bd8dec9",
          "message": "Update doc",
          "timestamp": "2026-03-22T17:50:31Z",
          "tree_id": "bda621a607fe36aaa38aa91eb8331aec8737fd05",
          "url": "https://github.com/rhorber/phpbench/commit/8888764ea1ef66db2dbb839d80a90a080bd8dec9"
        },
        "date": 1774206962680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 6483.6508806262045,
            "range": "± 2.30%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 294.57925636008633,
            "range": "± 2.43%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 287.96868884540254,
            "range": "± 1.98%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 288.05772994128927,
            "range": "± 2.45%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2417.87181996087,
            "range": "± 1.77%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3328.7084148728172,
            "range": "± 1.31%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5378.074363992106,
            "range": "± 0.67%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3865.777886497108,
            "range": "± 1.08%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5472.732876712353,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 8477.412915851244,
            "range": "± 1.97%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5240.683953033253,
            "range": "± 1.79%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7308.3444227005975,
            "range": "± 1.88%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 11318.547945205386,
            "range": "± 1.27%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 1891.460273972633,
            "range": "± 0.69%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 210.85890410959004,
            "range": "± 1.24%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 918.7925636007809,
            "range": "± 0.88%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "RunCommandBench::benchDefault",
            "value": 111716.54598825795,
            "range": "± 1.87%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 111345.43639921675,
            "range": "± 1.75%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 21374.60665362022,
            "range": "± 1.37%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 60.72700587084122,
            "range": "± 2.10%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 54.254598825832,
            "range": "± 2.27%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 817.7234833659489,
            "range": "± 0.68%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1207.3790606653727,
            "range": "± 0.51%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "e1fcce2f8072842fa9a814490378bea3bba29c42",
          "message": "docs: Add an example on adding a diff column",
          "timestamp": "2026-04-04T15:54:05+01:00",
          "tree_id": "900c9edce7ab8970dab24d2e318f99b1dff63031",
          "url": "https://github.com/rhorber/phpbench/commit/e1fcce2f8072842fa9a814490378bea3bba29c42"
        },
        "date": 1775330164998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 2754.7671232876733,
            "range": "± 1.19%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 353.76712328767553,
            "range": "± 2.14%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 339.9677103718198,
            "range": "± 2.35%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 348.08219178082396,
            "range": "± 1.89%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2290.796477495085,
            "range": "± 0.87%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3427.6966731898647,
            "range": "± 0.94%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5909.153620352307,
            "range": "± 0.92%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3717.1898238747563,
            "range": "± 0.57%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5452.452054794496,
            "range": "± 1.22%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 9213.81506849331,
            "range": "± 1.15%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5204.483365949112,
            "range": "± 1.78%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7503.725048923661,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 12174.667318982363,
            "range": "± 1.76%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 7074.780821917846,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 232.5457925636043,
            "range": "± 1.32%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 1085.7890410958676,
            "range": "± 0.53%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 72.42876712328527,
            "range": "± 2.16%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 66.6814090019557,
            "range": "± 2.06%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1462.916634050855,
            "range": "± 1.29%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 969.1690802348332,
            "range": "± 0.83%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "RunCommandBench::benchDefault",
            "value": 121751.92759295358,
            "range": "± 2.11%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 121527.2270058711,
            "range": "± 1.38%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 23216.072407045027,
            "range": "± 0.58%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sasezaki+github@gmail.com",
            "name": "sasezaki",
            "username": "sasezaki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f2742b3bfd1416ca95d4e0338af0b6897cf4e64",
          "message": "Add export-ignore rules to .gitattributes (#1146)\n\n* Add missing export-ignore entries to .gitattributes\n\n* Remove /templates/ from export-ignore (used at runtime)",
          "timestamp": "2026-05-06T21:19:39+02:00",
          "tree_id": "90e9703a359be4f7f3a3eed18625b9d2f74141a7",
          "url": "https://github.com/rhorber/phpbench/commit/2f2742b3bfd1416ca95d4e0338af0b6897cf4e64"
        },
        "date": 1778116576409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "RunCommandBench::benchDefault",
            "value": 120577.79843444256,
            "range": "± 1.90%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 119058.00978473676,
            "range": "± 1.68%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 23663.708414872643,
            "range": "± 1.05%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 74.02583170254611,
            "range": "± 1.46%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 65.53874755381528,
            "range": "± 2.69%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1452.5675146771136,
            "range": "± 1.13%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 241.93835616438702,
            "range": "± 1.54%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 1089.8620352250466,
            "range": "± 0.64%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 969.2426614481437,
            "range": "± 1.10%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 355.9559686888481,
            "range": "± 2.13%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 341.9804305283775,
            "range": "± 2.55%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 348.6076320939332,
            "range": "± 2.19%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2085.0626223091967,
            "range": "± 2.07%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3214.6966731898146,
            "range": "± 1.61%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5735.336594911958,
            "range": "± 2.20%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3608.83170254404,
            "range": "± 2.54%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5258.3023483366005,
            "range": "± 2.17%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 8939.865949119383,
            "range": "± 0.93%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5005.040117416861,
            "range": "± 2.30%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7254.986301369838,
            "range": "± 1.68%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 12143.767123287711,
            "range": "± 1.25%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 7108.6954990214845,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 2736.3315068492852,
            "range": "± 1.25%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "07b4fa73a8c706cd1bd98755ddadace3dba8248e",
          "message": "Allow lazy evaluation for functions (#1149)",
          "timestamp": "2026-06-06T16:19:12+01:00",
          "tree_id": "3f25ac29991acaa8f0a82c7b8cd7591f01646b3e",
          "url": "https://github.com/rhorber/phpbench/commit/07b4fa73a8c706cd1bd98755ddadace3dba8248e"
        },
        "date": 1780773362610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1421.4739726027512,
            "range": "± 2.53%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 73.15283757338436,
            "range": "± 2.26%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 66.33659491193683,
            "range": "± 2.09%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 953.0573385518513,
            "range": "± 0.56%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 7109.425636007804,
            "range": "± 1.21%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 326.14383561644144,
            "range": "± 2.70%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 323.0675146771034,
            "range": "± 1.90%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 330.00978473581677,
            "range": "± 2.04%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2039.4843444227163,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3132.6272015655322,
            "range": "± 1.06%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5604.737769080135,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3508.6086105675477,
            "range": "± 0.77%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5225.957925636001,
            "range": "± 0.74%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 8678.697651663344,
            "range": "± 0.48%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5069.071428571318,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7316.821917808193,
            "range": "± 1.07%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 12037.794520547874,
            "range": "± 1.00%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 2412.3908023483123,
            "range": "± 1.04%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "RunCommandBench::benchDefault",
            "value": 120975.93150684853,
            "range": "± 0.63%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 120232.62426614363,
            "range": "± 0.59%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 22822.58317025441,
            "range": "± 0.61%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 244.9232876712328,
            "range": "± 1.52%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 1134.4739726027271,
            "range": "± 1.44%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dan.t.leech@gmail.com",
            "name": "dantleech",
            "username": "dantleech"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4da0b8279e54f93d760fa078b5f0103c43c555b8",
          "message": "Report Derivations (#1148)\n\n- Derive columns from existing columns.\n- One or multiple passes.\n- New \"aggregate-preview\" report which includes the new \"diff\" column\n  making use of this feature.\n- Add documentation\n- Deprecates the `BASELINE_EXPRESSIONS` option\n- nl2br in HTML report for description",
          "timestamp": "2026-06-07T11:40:05+01:00",
          "tree_id": "77ea4b88bd97ae1d9578a0e039cac39335914c2e",
          "url": "https://github.com/rhorber/phpbench/commit/4da0b8279e54f93d760fa078b5f0103c43c555b8"
        },
        "date": 1780838170016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "VariantSummaryFormatterBench::benchFormat",
            "value": 1427.347945205481,
            "range": "± 1.35%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp. w/tol)",
            "value": 76.29021526418774,
            "range": "± 2.58%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ParserBench::benchEvaluate (comp.)",
            "value": 66.36888454011736,
            "range": "± 2.31%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "AssertionProcessorBench::benchAssert",
            "value": 956.6493150684853,
            "range": "± 0.40%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ExpressionGeneratorBench::benchGenerate",
            "value": 7448.591780821989,
            "range": "± 1.20%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,0)",
            "value": 336.28669275929497,
            "range": "± 2.57%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,0)",
            "value": 331.0469667318928,
            "range": "± 2.50%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,0)",
            "value": 334.1242661448083,
            "range": "± 2.07%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,25)",
            "value": 2260.5675146771055,
            "range": "± 1.45%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,25)",
            "value": 3431.362035225059,
            "range": "± 1.27%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,25)",
            "value": 5907.746575342386,
            "range": "± 1.49%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,50)",
            "value": 3709.280821917787,
            "range": "± 0.80%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,50)",
            "value": 5531.205479452035,
            "range": "± 1.75%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,50)",
            "value": 8839.901174168306,
            "range": "± 1.86%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (text,75)",
            "value": 5194.515655577416,
            "range": "± 1.36%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (bar_chart_aggregate,75)",
            "value": 7747.917808219223,
            "range": "± 1.69%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "ComponentGeneratorBench::benchGenerate (table_aggregate,75)",
            "value": 12632.79452054781,
            "range": "± 2.29%",
            "unit": "μs",
            "extra": "10 iterations, 2 revs"
          },
          {
            "name": "HtmlRendererBench::benchRender",
            "value": 2414.4273972602755,
            "range": "± 0.94%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "RunCommandBench::benchDefault",
            "value": 132956.22896282037,
            "range": "± 1.08%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchInBand",
            "value": 132220.287671233,
            "range": "± 0.95%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "RunCommandBench::benchNoEnv",
            "value": 23598.31311154595,
            "range": "± 1.64%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRowArrays",
            "value": 245.86888454011822,
            "range": "± 2.12%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "DataFrameBench::benchCreateFromRecords",
            "value": 1141.5596868884732,
            "range": "± 0.39%",
            "unit": "μs",
            "extra": "10 iterations, 10 revs"
          }
        ]
      }
    ]
  }
}