import sys
import os
import json

units_dir = "/Users/yashpatil/.gemini/antigravity-ide/brain/ffdd1656-bc55-4c60-bbbf-84a9fe48be7d/physics_units"
sys.path.append(units_dir)

units = []
for i in range(1, 13):
    module_name = f"unit{i}"
    mod = __import__(module_name)
    units.append(mod.unit_data)

ts_content = """export interface APPhysQuestion {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint: string;
  explanation: string;
  unitId: number;
}

export interface APPhysTopic {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  image?: string;
  article: string;
  questions: APPhysQuestion[];
}

export interface APPhysUnit {
  id: number;
  title: string;
  masteryWeight: string;
  topics: APPhysTopic[];
}

"""

# We serialize to formatted JSON-like TypeScript array
json_data = json.dumps(units, indent=2)
ts_content += f"export const apPhysicsData: APPhysUnit[] = {json_data};\n"

output_path = "/Users/yashpatil/AP Lab/src/lib/courses/ap-physics-data.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully generated AP Physics C data file at {output_path}")
