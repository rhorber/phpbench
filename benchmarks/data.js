window.BENCHMARK_DATA = {
  "lastUpdate": 1774206964053,
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
      }
    ]
  }
}