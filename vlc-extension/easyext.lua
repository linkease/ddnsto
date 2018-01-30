--[[
 EasyExplorer extension for VLC &gt;= 1.1.0
 Authors: Janson
 https://github.com/videolan/vlc/blob/master/modules/lua/libs/dialog.c
 http://translatedby.com/you/instructions-to-code-your-own-vlc-lua-scripts/original/
 vlc -vvv --color
--]]


function descriptor()
    return { title = "EasyExplorer" ;
             version = "0.1" ;
             author = "Janson" ;
             capabilities = {} }
end

local config = {}
      config["url"]     = "http://127.0.0.1:8899/files/"
      config["api"] = "/api/vlcList?action=list&path="
      config["result"] = nil

function json_init()
    if json ~= nil then return false end

    vlc.msg.dbg("JSON parser lazy initialization")
    json = require ("dkjson")

    -- Use vlc.stream to grab a remote json file, place it in a string,
    -- decode it and return the decoded data.
    json["parse_url"] = function(url)
        local stream = vlc.stream(url)
        local string = ""
        local line   = ""

        repeat
            line = stream:readline()
            string = string..line
        until line ~= nil

        --print(string)
        return json.decode(string)
    end
end

function activate()
    dlg = vlc.dialog("EasyExplorer")
    dlg:add_label( "Server:", 1, 1, 1, 1 )
    txt_files = config.url
    input = dlg:add_text_input(txt_files, 2, 1, 8, 1)
    button_play = dlg:add_button("Go", click_go, 10, 1, 1, 1)
    list = dlg:add_list(1, 2, 10, 1)
    button_play = dlg:add_button("Back", click_back, 1, 3, 2, 1)
    button_play = dlg:add_button("Open", click_open, 3, 3, 2, 1)

    dlg:show()
end

function click_go()
    json_init()
    list:clear()
    txt_files = input:get_text()
    config["url"] = txt_files
    -- vlc.msg.info("EasyExplorer Go " .. txt_files)

    -- request json
    i = string.find(txt_files, "/files/")
    path = ""
    url = ""
    if i ~= nil then
        path = string.sub(txt_files, i+6)
        url = string.sub(txt_files, 1, i-1)
    end
    vlc.msg.info("Fetching EasyExplorer from API ("..path..")")
    if path ~= "" then
        local resp = json.parse_url(url .. config.api ..path)
        if resp.result == nil then
            return nil
        end
        config["result"] = resp.result
        for idx, file in ipairs(resp.result) do
            list:add_value(file.name, idx)
        end
    end
end

function findLast(haystack, needle)
    local i=haystack:match(".*"..needle.."()")
    if i==nil then return nil else return i-1 end
end

function click_back()
    json_init()

    txt_files = input:get_text()
    i = string.find(txt_files, "/files/")
    path = ""
    url = ""
    if i ~= nil then
        path = string.sub(txt_files, i+6, string.len(txt_files)-1)
        url = string.sub(txt_files, 1, i-1)
    end

    if path ~= "" then
        i = findLast(path, "/")
        if i ~= nil then
            path = string.sub(path, 1, i)
        else
            path = "/"
        end
    else 
        path = "/"
        url = "http://127.0.0.1:8899"
    end

    input:set_text(url .. "/files" .. path)
    click_go()
end

function click_open()
    json_init()

    selection = list:get_selection()
    if (not selection) then return 1 end
    local sel = nil
    for idx, selectedItem in pairs(selection) do
        sel = idx
        break
    end
    if config.result == nil then
        return 1
    end
    item = config.result[sel]
    if item == nil then
        return 1
    end

    if item["type"] == "dir" then
        path = config.url .. item["name"] .. "/"
        input:set_text(path)
        click_go()
        return 1
    end

    -- Play the selected radio station
    -- vlc.playlist.clear()
    -- vlc.playlist.add()
    -- vlc.playlist.play()
    playlistItem = {}
    playlistItem.path = config.url .. item["name"]
    vlc.playlist.clear()
    vlc.playlist.add( {playlistItem} )
    vlc.playlist.play()
end

function deactivate()
end

function close()
    vlc.deactivate()
end

