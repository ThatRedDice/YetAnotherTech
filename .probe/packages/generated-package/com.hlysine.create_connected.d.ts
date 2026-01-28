declare module "com.hlysine.create_connected.CCGuiTextures" {
import {$ScreenElement$$Interface} from "net.createmod.catnip.gui.element.ScreenElement"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Color$$Type} from "net.createmod.catnip.theme.Color"

export class $CCGuiTextures extends $Enum<($CCGuiTextures)> implements $ScreenElement$$Interface {
static readonly "SEQUENCER_DELAY": $CCGuiTextures
static readonly "SEQUENCER_END": $CCGuiTextures
static readonly "SEQUENCER": $CCGuiTextures
static readonly "FONT_COLOR": integer
readonly "width": integer
static readonly "SEQUENCER_EMPTY": $CCGuiTextures
static readonly "SEQUENCER_AWAIT": $CCGuiTextures
readonly "location": $ResourceLocation
readonly "startY": integer
readonly "startX": integer
static readonly "SEQUENCER_INSTRUCTION": $CCGuiTextures
readonly "height": integer

public "bind"(): void
public static "values"(): ($CCGuiTextures)[]
public static "valueOf"(arg0: StringJS): $CCGuiTextures
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $Color$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCGuiTextures$$Type = (("sequencer") | ("sequencer_instruction") | ("sequencer_delay") | ("sequencer_end") | ("sequencer_empty") | ("sequencer_await"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCGuiTextures$$Original = $CCGuiTextures;}
