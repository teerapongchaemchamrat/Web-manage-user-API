UPDATE  [dbo].[user]
SET
        [status] = 1,
        [update_by] = @update_by,
        [update_last] = CURRENT_TIMESTAMP
WHERE [user_id] = @user_id and [company] = 'BCC'