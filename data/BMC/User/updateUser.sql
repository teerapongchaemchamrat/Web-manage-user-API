UPDATE  [dbo].[user]
SET
        [user_id] = @new_id,
        [dpt] = @dpt,
        [infor_id] = @infor_id,
        [infor_pass] = @infor_pass,
        [dcc_id] = @dcc_id,
        [dcc_pass] = @dcc_pass,
        [com_id] = @com_id,
        [com_pass] = @com_pass,
        [email_id] = @email_id,
        [email_pass] = @email_pass,
        [print_id] = @print_id,
        [print_pass] = @print_pass,
        [status] = @status,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP
WHERE [user_id] = @user_id and [company] = 'BMC'